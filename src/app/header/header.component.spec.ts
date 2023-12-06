import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CartService } from '../services/cart.service';
import { LoginStatusService } from '../login-status.service';
import { TipoProductoServiceService } from '../services/tipo-producto-service.service';
import { of } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { TipoProducto } from '../models/tipo-producto';
import { Product } from '../models/product';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let cartService: CartService;
  let tipoProductoService: TipoProductoServiceService;
  let loginStatusService: LoginStatusService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [CartService, LoginStatusService, TipoProductoServiceService],
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    tipoProductoService = TestBed.inject(TipoProductoServiceService);
    loginStatusService = TestBed.inject(LoginStatusService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('debería inyectar el servicio CartService', () => {
    expect(component.cartService).toBeDefined();
  });
  it('deberia inicializar las propiedades del componente', () => {
    expect(component.Categorias).toEqual([]);
    expect(component.CartItems).toEqual([]);
    expect(component.Total).toEqual(0);
    expect(component.modalSwitch).toBe(false);
    expect(component.isLoginPopupVisible).toBe(false);
  });

  it('deberia llamar metodos ngOnInit', fakeAsync(() => {
    const fakeApiResponse: ApiResponse<TipoProducto> = {
      status: 'success',
      mensaje: 'Consulta exitosa',
      total_resultados: 0,
      resultados: []
    };

    spyOn(tipoProductoService, 'get').and.returnValue(of(fakeApiResponse));
    spyOn(loginStatusService, 'validarSesion');

    component.ngOnInit();
    tick();

    expect(component.CartItems).toEqual([]);
    expect(component.Total).toEqual(0);
    expect(component.Categorias).toEqual([]);
    expect(tipoProductoService.get).toHaveBeenCalled();
    expect(loginStatusService.validarSesion).toHaveBeenCalled();
  }));

  it('should call DeleteItem method', () => {
    const product: Product = {

      id: 1,
      TipoProducto: {
        id: 1,
        nombre: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      },
      precio: 0,
      nombre:'',
      categoria:  '',
      descripcion: '',
      stock:  1,
      imagen: '',
      activo: true,
      createdAt: '',
      updatedAt: '',

    };
    spyOn(cartService, 'DeleteItem');

    component.DeleteItem(product);

    expect(cartService.DeleteItem).toHaveBeenCalledWith(product);

  });

  it('should call clearCart method on FlushCart', () => {
    spyOn(cartService, 'clearCart').and.returnValue([]);

    component.FlushCart();

    expect(component.CartItems).toEqual([]);
    expect(cartService.clearCart).toHaveBeenCalled();
  });

  it('should show and hide login popup', () => {
    component.showLoginPopup();
    expect(component.isLoginPopupVisible).toBe(true);

    component.hideLoginPopup();
    expect(component.isLoginPopupVisible).toBe(false);
  });


});
