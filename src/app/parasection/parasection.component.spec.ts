import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasectionComponent } from './parasection.component';

describe('ParasectionComponent', () => {
  let component: ParasectionComponent;
  let fixture: ComponentFixture<ParasectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParasectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParasectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
