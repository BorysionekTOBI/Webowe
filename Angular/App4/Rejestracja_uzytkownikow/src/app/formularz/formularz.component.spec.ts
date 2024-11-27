import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularzComponent } from './formularz.component';

describe('FormularzComponent', () => {
  let component: FormularzComponent;
  let fixture: ComponentFixture<FormularzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
