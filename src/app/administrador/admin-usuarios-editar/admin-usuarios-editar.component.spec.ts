import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosEditarComponent } from './admin-usuarios-editar.component';

describe('AdminUsuariosEditarComponent', () => {
  let component: AdminUsuariosEditarComponent;
  let fixture: ComponentFixture<AdminUsuariosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsuariosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
