import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferstagComponent } from './offerstag.component';

describe('OfferstagComponent', () => {
  let component: OfferstagComponent;
  let fixture: ComponentFixture<OfferstagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferstagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferstagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
