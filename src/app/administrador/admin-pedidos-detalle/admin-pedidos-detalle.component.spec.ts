import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPedidosDetalleComponent } from './admin-pedidos-detalle.component';

describe('AdminPedidosDetalleComponent', () => {
  let component: AdminPedidosDetalleComponent;
  let fixture: ComponentFixture<AdminPedidosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPedidosDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPedidosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
