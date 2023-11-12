import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriaNuevaComponent } from './admin-categoria-nueva.component';

describe('AdminCategoriaNuevaComponent', () => {
  let component: AdminCategoriaNuevaComponent;
  let fixture: ComponentFixture<AdminCategoriaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriaNuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoriaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
