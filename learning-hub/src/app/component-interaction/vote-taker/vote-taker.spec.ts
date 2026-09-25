import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTaker } from './vote-taker';

describe('VoteTaker', () => {
  let component: VoteTaker;
  let fixture: ComponentFixture<VoteTaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteTaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteTaker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
