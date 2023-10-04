import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNotAvailableComponent } from './server-not-available.component';

describe('ServerNotAvailableComponent', () => {
  let component: ServerNotAvailableComponent;
  let fixture: ComponentFixture<ServerNotAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerNotAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
