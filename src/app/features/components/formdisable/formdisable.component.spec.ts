import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdisableComponent } from './formdisable.component';

describe('FormdisableComponent', () => {
  let component: FormdisableComponent;
  let fixture: ComponentFixture<FormdisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormdisableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdisableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
