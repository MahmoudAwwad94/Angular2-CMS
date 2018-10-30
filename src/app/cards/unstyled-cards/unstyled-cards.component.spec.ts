import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstyledCardsComponent } from './unstyled-cards.component';

describe('UnstyledCardsComponent', () => {
  let component: UnstyledCardsComponent;
  let fixture: ComponentFixture<UnstyledCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnstyledCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnstyledCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
