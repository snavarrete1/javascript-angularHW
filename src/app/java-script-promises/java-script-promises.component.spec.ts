import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptPromisesComponent } from './java-script-promises.component';

describe('JavaScriptPromisesComponent', () => {
  let component: JavaScriptPromisesComponent;
  let fixture: ComponentFixture<JavaScriptPromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptPromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
