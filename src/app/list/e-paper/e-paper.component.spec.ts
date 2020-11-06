import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPaperComponent } from './e-paper.component';

describe('EPaperComponent', () => {
  let component: EPaperComponent;
  let fixture: ComponentFixture<EPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
