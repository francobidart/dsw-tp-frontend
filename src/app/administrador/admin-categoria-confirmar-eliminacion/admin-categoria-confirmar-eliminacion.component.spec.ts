import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriaConfirmarEliminacionComponent } from './admin-categoria-confirmar-eliminacion.component';

describe('AdminCategoriaConfirmarEliminacionComponent', () => {
  let component: AdminCategoriaConfirmarEliminacionComponent;
  let fixture: ComponentFixture<AdminCategoriaConfirmarEliminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriaConfirmarEliminacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoriaConfirmarEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
