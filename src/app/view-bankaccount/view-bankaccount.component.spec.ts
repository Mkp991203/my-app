import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankaccountComponent } from './view-bankaccount.component';

describe('ViewBankaccountComponent', () => {
  let component: ViewBankaccountComponent;
  let fixture: ComponentFixture<ViewBankaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBankaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
