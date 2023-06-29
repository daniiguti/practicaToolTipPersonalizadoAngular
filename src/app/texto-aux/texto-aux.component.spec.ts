import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoAuxComponent } from './texto-aux.component';

describe('TextoAuxComponent', () => {
  let component: TextoAuxComponent;
  let fixture: ComponentFixture<TextoAuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoAuxComponent]
    });
    fixture = TestBed.createComponent(TextoAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
