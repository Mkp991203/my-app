import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankAccountsComponent } from './create-bank-accounts.component';

describe('CreateBankAccountsComponent', () => {
  let component: CreateBankAccountsComponent;
  let fixture: ComponentFixture<CreateBankAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBankAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
