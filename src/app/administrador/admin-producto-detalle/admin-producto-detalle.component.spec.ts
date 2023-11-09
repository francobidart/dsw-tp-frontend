import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoDetalleComponent } from './admin-producto-detalle.component';

describe('AdminProductoDetalleComponent', () => {
  let component: AdminProductoDetalleComponent;
  let fixture: ComponentFixture<AdminProductoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
