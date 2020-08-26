import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptsCreatorComponent } from './java-scripts-creator.component';

describe('JavaScriptsCreatorComponent', () => {
  let component: JavaScriptsCreatorComponent;
  let fixture: ComponentFixture<JavaScriptsCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptsCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
