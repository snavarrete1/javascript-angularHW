import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptsMapHigherLevelFunctionComponent } from './java-scripts-map-higher-level-function.component';

describe('JavaScriptsMapHigherLevelFunctionComponent', () => {
  let component: JavaScriptsMapHigherLevelFunctionComponent;
  let fixture: ComponentFixture<JavaScriptsMapHigherLevelFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptsMapHigherLevelFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptsMapHigherLevelFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
