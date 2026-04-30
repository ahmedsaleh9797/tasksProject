import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIconComponent } from './home-icon.component';

describe('HomeIconComponent', () => {
  let component: HomeIconComponent;
  let fixture: ComponentFixture<HomeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIconComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
