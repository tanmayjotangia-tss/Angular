import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBank } from './approve-bank';

describe('ApproveBank', () => {
  let component: ApproveBank;
  let fixture: ComponentFixture<ApproveBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveBank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveBank);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
