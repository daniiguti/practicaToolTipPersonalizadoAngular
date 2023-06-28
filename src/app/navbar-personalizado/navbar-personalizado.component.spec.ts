import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPersonalizadoComponent } from './navbar-personalizado.component';

describe('NavbarPersonalizadoComponent', () => {
  let component: NavbarPersonalizadoComponent;
  let fixture: ComponentFixture<NavbarPersonalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPersonalizadoComponent]
    });
    fixture = TestBed.createComponent(NavbarPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
