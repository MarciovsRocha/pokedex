import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackcardsComponent } from './backcards.component';

describe('BackcardsComponent', () => {
  let component: BackcardsComponent;
  let fixture: ComponentFixture<BackcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
