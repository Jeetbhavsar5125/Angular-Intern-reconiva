import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDisplay } from './name-display';

describe('NameDisplay', () => {
  let component: NameDisplay;
  let fixture: ComponentFixture<NameDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
