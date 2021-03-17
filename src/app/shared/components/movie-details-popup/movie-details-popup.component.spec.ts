import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPopupComponent } from './movie-details-popup.component';

describe('MovieDetailsPopupComponent', () => {
  let component: MovieDetailsPopupComponent;
  let fixture: ComponentFixture<MovieDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
