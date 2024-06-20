import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEstateComponent } from './find-estate.component';

describe('FindEstateComponent', () => {
  let component: FindEstateComponent;
  let fixture: ComponentFixture<FindEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindEstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
