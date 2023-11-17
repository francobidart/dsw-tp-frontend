import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosCambiarClaveComponent } from './admin-usuarios-cambiar-clave.component';

describe('AdminUsuariosCambiarClaveComponent', () => {
  let component: AdminUsuariosCambiarClaveComponent;
  let fixture: ComponentFixture<AdminUsuariosCambiarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosCambiarClaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsuariosCambiarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
