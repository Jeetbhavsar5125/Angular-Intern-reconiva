import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectiveCompostiton } from './directive-compostiton';

describe('DirectiveCompostiton', () => {
  let component: DirectiveCompostiton;
  let fixture: ComponentFixture<DirectiveCompostiton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveCompostiton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveCompostiton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
