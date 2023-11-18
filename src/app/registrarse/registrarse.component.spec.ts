import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarseComponent } from './registrarse.component';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast/toast-service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('RegistrarseComponent', () => {
  let component: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let toastServiceSpy: jasmine.SpyObj<ToastService>;
  let routerSpy: jasmine.SpyObj<Router>;



  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['registrarUsuario']);
    toastServiceSpy = jasmine.createSpyObj('ToastService', ['showSuccess', 'showError']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [RegistrarseComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: ToastService, useValue: toastServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar mensaje de las contraseñas no coinciden', () => {
    component.formulario.setValue({
      nombre: 'Lautaro',
      apellido: 'Martinez',
      telefono: '123456789',
      email: 'lauticrack@gol.com',
      password: 'password1',
      repetirpassword: 'password2',
    });

    component.registrarUsuario();

    expect(component.Completado).toBe('Las contraseñas no coinciden');
    expect(userServiceSpy.registrarUsuario).not.toHaveBeenCalled();
  });

  it('Deberia mostrar mensaje de complete todos los campos por favor', () => {
    component.formulario.setValue({
      nombre: 'Diego',
      apellido: 'Milito',
      telefono: '123456789',
      email: '', // invalid email
      password: 'password1',
      repetirpassword: 'password1',
    });

    component.registrarUsuario();

    expect(component.Completado).toBe('Complete todos los campos correctamente por favor');
    expect(userServiceSpy.registrarUsuario).not.toHaveBeenCalled();
  });

  it('Deberia mostrar se cargo correctamente y registrarse los datos en el back', () => {
    userServiceSpy.registrarUsuario.and.returnValue(of({ mensaje: 'Se Registro Correctamente' }));

    component.formulario.setValue({
      nombre: 'Lisandro',
      apellido: 'Lopez',
      telefono: '123456789',
      email: 'lp@example.com',
      password: 'password1',
      repetirpassword: 'password1',
    });

    component.registrarUsuario();
    expect(component.Completado).toBe('Se ha registrado correctamente');
    expect(userServiceSpy.registrarUsuario).toHaveBeenCalledWith(component.formulario.value);
    expect(toastServiceSpy.showSuccess).toHaveBeenCalledWith('Se Registro Correctamente');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('Deberia mostrar mensaje de error', () => {
    const errorMessage = 'Fallo Registro';
    userServiceSpy.registrarUsuario.and.returnValue(throwError({ error: { mensaje: errorMessage } }));

    component.formulario.setValue({
      nombre: 'Gaspar',
      apellido: 'Martinez',
      telefono: '123456789',
      email: 'gm@example.com',
      password: 'password1',
      repetirpassword: 'password1',
    });

    component.registrarUsuario();

    expect(userServiceSpy.registrarUsuario).toHaveBeenCalledWith(component.formulario.value);
    expect(toastServiceSpy.showError).toHaveBeenCalledWith(errorMessage);
  });
});
