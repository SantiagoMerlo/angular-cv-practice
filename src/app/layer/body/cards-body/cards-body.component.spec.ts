import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBodyComponent } from './cards-body.component';

describe('CardsBodyComponent', () => {
  let component: CardsBodyComponent;
  let fixture: ComponentFixture<CardsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
