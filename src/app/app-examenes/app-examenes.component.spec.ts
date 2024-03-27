import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExamenesComponent } from './app-examenes.component';

describe('AppExamenesComponent', () => {
  let component: AppExamenesComponent;
  let fixture: ComponentFixture<AppExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppExamenesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
