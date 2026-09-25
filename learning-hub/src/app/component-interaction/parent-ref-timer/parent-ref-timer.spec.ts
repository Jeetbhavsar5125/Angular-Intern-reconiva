import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRefTimer } from './parent-ref-timer';

describe('ParentRefTimer', () => {
  let component: ParentRefTimer;
  let fixture: ComponentFixture<ParentRefTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentRefTimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentRefTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
