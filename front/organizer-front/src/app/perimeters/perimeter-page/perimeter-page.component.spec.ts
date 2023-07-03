import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimeterPageComponent } from './perimeter-page.component';

describe('PerimeterPageComponent', () => {
  let component: PerimeterPageComponent;
  let fixture: ComponentFixture<PerimeterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerimeterPageComponent]
    });
    fixture = TestBed.createComponent(PerimeterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
