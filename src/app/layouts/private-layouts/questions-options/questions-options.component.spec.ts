import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsOptionsComponent } from './questions-options.component';

describe('QuestionsOptionsComponent', () => {
  let component: QuestionsOptionsComponent;
  let fixture: ComponentFixture<QuestionsOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
