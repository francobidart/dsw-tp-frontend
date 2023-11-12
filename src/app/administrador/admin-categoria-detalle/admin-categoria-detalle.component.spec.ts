import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriaDetalleComponent } from './admin-categoria-detalle.component';

describe('AdminCategoriaDetalleComponent', () => {
  let component: AdminCategoriaDetalleComponent;
  let fixture: ComponentFixture<AdminCategoriaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoriaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
