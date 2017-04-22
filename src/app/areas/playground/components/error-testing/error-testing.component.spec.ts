import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTestingComponent } from './error-testing.component';

describe('ErrorTestingComponent', () => {
  let component: ErrorTestingComponent;
  let fixture: ComponentFixture<ErrorTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
