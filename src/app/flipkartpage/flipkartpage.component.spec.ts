import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartpageComponent } from './flipkartpage.component';

describe('FlipkartpageComponent', () => {
  let component: FlipkartpageComponent;
  let fixture: ComponentFixture<FlipkartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
