import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoNuevoComponent } from './admin-producto-nuevo.component';

describe('AdminProductoNuevoComponent', () => {
  let component: AdminProductoNuevoComponent;
  let fixture: ComponentFixture<AdminProductoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductoNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
