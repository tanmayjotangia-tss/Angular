import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveClient } from './approve-client';

describe('ApproveClient', () => {
  let component: ApproveClient;
  let fixture: ComponentFixture<ApproveClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
