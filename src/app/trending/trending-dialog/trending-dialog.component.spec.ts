import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDialogComponent } from './trending-dialog.component';

describe('TrendingDialogComponent', () => {
  let component: TrendingDialogComponent;
  let fixture: ComponentFixture<TrendingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
