import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeUnderstanding } from './pipe-understanding';

describe('PipeUnderstanding', () => {
  let component: PipeUnderstanding;
  let fixture: ComponentFixture<PipeUnderstanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeUnderstanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeUnderstanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
