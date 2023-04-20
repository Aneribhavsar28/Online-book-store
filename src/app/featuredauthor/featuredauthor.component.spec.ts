import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedauthorComponent } from './featuredauthor.component';

describe('FeaturedauthorComponent', () => {
  let component: FeaturedauthorComponent;
  let fixture: ComponentFixture<FeaturedauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedauthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
