import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosNuevoComponent } from './admin-usuarios-nuevo.component';

describe('AdminUsuariosNuevoComponent', () => {
  let component: AdminUsuariosNuevoComponent;
  let fixture: ComponentFixture<AdminUsuariosNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsuariosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
