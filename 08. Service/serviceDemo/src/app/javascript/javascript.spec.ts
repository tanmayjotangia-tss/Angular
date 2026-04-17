import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Javascript } from './javascript';

describe('Javascript', () => {
  let component: Javascript;
  let fixture: ComponentFixture<Javascript>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Javascript]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Javascript);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
