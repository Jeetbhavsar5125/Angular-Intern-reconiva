import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameList } from './name-list';

describe('NameList', () => {
  let component: NameList;
  let fixture: ComponentFixture<NameList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
