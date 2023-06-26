import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimetersListComponent } from './perimeters-list.component';

describe('PerimetersListComponent', () => {
  let component: PerimetersListComponent;
  let fixture: ComponentFixture<PerimetersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerimetersListComponent]
    });
    fixture = TestBed.createComponent(PerimetersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
