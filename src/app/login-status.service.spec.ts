import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { LoginStatusService } from './login-status.service';
import { environment } from '../environments/environment';

describe('LoginStatusService', () => {
  let service: LoginStatusService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginStatusService],
    });

    service = TestBed.inject(LoginStatusService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set isAuthenticated to true on successful login', fakeAsync(() => {
  

    service.login('test@test.com', 'admin');

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/login`);
    expect(req.request.method).toEqual('POST');

    expect(service.isAuthenticated).toBeTruthy();
    expect(service.isAdmin).toBeFalsy();
  }));

  it('should set isAuthenticated to false on unsuccessful login', fakeAsync(() => {
    const dummyErrorResponse = { mensaje: 'Error en el login' };

    service.login('invalidUsername', 'invalidPassword');

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/login`);
    expect(req.request.method).toEqual('POST');
    req.error(new ErrorEvent('error', { error: dummyErrorResponse }));

    tick();  // Wait for the Observable to complete

    expect(service.isAuthenticated).toBeFalsy();
    expect(service.errorMessage).toEqual(dummyErrorResponse.mensaje);
  }));

  it('should set isAuthenticated to true on successful session validation', fakeAsync(() => {
    const dummyResponse = { resultados: { isAdmin: false } };
    service.login('test@test.com', 'admin');

    service.validarSesion();

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/session/validateSession`);
    expect(req.request.method).toEqual('GET');
    

    tick();  // Wait for the Observable to complete

    expect(service.isAuthenticated).toBeTruthy();
    expect(service.isAdmin).toEqual(dummyResponse.resultados.isAdmin);
  }));

  it('should set isAuthenticated to false on unsuccessful session validation', fakeAsync(() => {
    service.validarSesion();

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/session/validateSession`);
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent('error'));

    tick();  // Wait for the Observable to complete

    expect(service.isAuthenticated).toBeFalsy();
  }));

  it('should set isAuthenticated and isAdmin to false on logout', fakeAsync(() => {
    
    service.login('test@test.com', 'admin');
    service.logout();

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/logout`);
    expect(req.request.method).toEqual('GET');

    tick();  // Wait for the Observable to complete

    expect(service.isAuthenticated).toBeFalsy();
    expect(service.isAdmin).toBeFalsy();
  }));

  it('should return profile data on getPerfil', fakeAsync(() => {
    const dummyProfileData =  'test@test.com';
    
    service.login('test@test.com', 'admin');

    service.getPerfil().subscribe(profile => {
      expect(profile.email).toEqual(dummyProfileData);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/account/profile`);
    expect(req.request.method).toEqual('GET');
  }));
});
