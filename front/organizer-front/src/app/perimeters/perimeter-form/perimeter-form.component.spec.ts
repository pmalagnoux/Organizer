import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimeterFormComponent } from './perimeter-form.component';

describe('PerimeterFormComponent', () => {
  let component: PerimeterFormComponent;
  let fixture: ComponentFixture<PerimeterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerimeterFormComponent]
    });
    fixture = TestBed.createComponent(PerimeterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
