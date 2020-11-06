import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPaperDetailComponent } from './e-paper-detail.component';

describe('EPaperDetailComponent', () => {
  let component: EPaperDetailComponent;
  let fixture: ComponentFixture<EPaperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPaperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
