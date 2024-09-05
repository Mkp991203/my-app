import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilblingComponent } from './silbling.component';

describe('SilblingComponent', () => {
  let component: SilblingComponent;
  let fixture: ComponentFixture<SilblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilblingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
