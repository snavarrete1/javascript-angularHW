import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptCallbacksComponent } from './java-script-callbacks.component';

describe('JavaScriptCallbacksComponent', () => {
  let component: JavaScriptCallbacksComponent;
  let fixture: ComponentFixture<JavaScriptCallbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptCallbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptCallbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
