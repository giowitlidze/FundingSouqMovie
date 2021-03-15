import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDialogComponent } from './popular-dialog.component';

describe('PopularDialogComponent', () => {
  let component: PopularDialogComponent;
  let fixture: ComponentFixture<PopularDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
