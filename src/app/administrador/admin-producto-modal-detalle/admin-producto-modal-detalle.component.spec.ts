import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoModalDetalleComponent } from './admin-producto-modal-detalle.component';

describe('AdminProductoModalDetalleComponent', () => {
  let component: AdminProductoModalDetalleComponent;
  let fixture: ComponentFixture<AdminProductoModalDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductoModalDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductoModalDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
