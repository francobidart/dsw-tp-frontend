import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {LoginStatusService} from './login-status.service';
import {environment} from '../environments/environment';

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

  it('deberia setear isAuthenticated a true luego de un login exitoso', fakeAsync(() => {
    const dummyResponse = {resultados: {isAdmin: false}};

    service.login('username@yahoo.com', 'password');

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(dummyResponse);

    tick();

    expect(service.isAuthenticated).toBeTruthy();
    expect(service.isAdmin).toEqual(dummyResponse.resultados.isAdmin);
  }));

  it('deberia setear isAuthenticated a false luego de un login no exitoso', fakeAsync(() => {
    const expectedError = {
      mensaje: 'Error en el login'
    };

    service.login('invalidUsername@utn.com', 'invalidPassword');


    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedError, { status: 500, statusText: "Internal Server Error"});

    tick();

    expect(service.isAuthenticated).toBeFalsy();
    expect(service.errorMessage).toEqual(expectedError.mensaje);
  }));


  it('deberia setear isAuthenticated a true luego de una validacion de usuario exitosa', fakeAsync(() => {
    const dummyResponse = {resultados: {isAdmin: false}};

    service.validarSesion();

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/session/validateSession`);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyResponse);

    tick();

    expect(service.isAuthenticated).toBeTruthy();
    expect(service.isAdmin).toEqual(dummyResponse.resultados.isAdmin);
  }));


  it('deberia setear isAuthenticated e isAdmin a false por logout', fakeAsync(() => {
    service.logout();

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/logout`);
    expect(req.request.method).toEqual('GET');
    req.flush({});

    tick();

    expect(service.isAuthenticated).toBeFalsy();
    expect(service.isAdmin).toBeFalsy();
  }));

  it('deberia retornar el perfil  ', fakeAsync(() => {
    const dummyProfileData = {name: 'Paco', email: 'paco123@example.com'};

    service.getPerfil().subscribe(profile => {
      expect(profile).toEqual(dummyProfileData);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}sesion/account/profile`);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyProfileData);

    tick();
  }));
});
