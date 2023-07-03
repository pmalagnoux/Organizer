import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPerimeterFormComponent } from './new-perimeter-form.component';

describe('NewPerimeterFormComponent', () => {
  let component: NewPerimeterFormComponent;
  let fixture: ComponentFixture<NewPerimeterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPerimeterFormComponent]
    });
    fixture = TestBed.createComponent(NewPerimeterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
