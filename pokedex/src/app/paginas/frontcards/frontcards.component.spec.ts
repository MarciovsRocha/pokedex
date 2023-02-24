import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcardsComponent } from './frontcards.component';

describe('FrontcardsComponent', () => {
  let component: FrontcardsComponent;
  let fixture: ComponentFixture<FrontcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
