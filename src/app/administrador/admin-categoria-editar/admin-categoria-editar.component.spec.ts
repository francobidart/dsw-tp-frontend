import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriaEditarComponent } from './admin-categoria-editar.component';

describe('AdminCategoriaEditarComponent', () => {
  let component: AdminCategoriaEditarComponent;
  let fixture: ComponentFixture<AdminCategoriaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoriaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
