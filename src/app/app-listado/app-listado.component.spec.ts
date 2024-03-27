import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListadoComponent } from './app-listado.component';

describe('AppListadoComponent', () => {
  let component: AppListadoComponent;
  let fixture: ComponentFixture<AppListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
