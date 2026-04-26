import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayComponent } from './formarray.component';

describe('FormarrayComponent', () => {
  let component: FormarrayComponent;
  let fixture: ComponentFixture<FormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormarrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormarrayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
