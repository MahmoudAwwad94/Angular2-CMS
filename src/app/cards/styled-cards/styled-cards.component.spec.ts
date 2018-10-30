import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledCardsComponent } from './styled-cards.component';

describe('StyledCardsComponent', () => {
  let component: StyledCardsComponent;
  let fixture: ComponentFixture<StyledCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
