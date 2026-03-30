import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFlightsComponent } from './top-flights.component';

describe('TopFlightsComponent', () => {
  let component: TopFlightsComponent;
  let fixture: ComponentFixture<TopFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
