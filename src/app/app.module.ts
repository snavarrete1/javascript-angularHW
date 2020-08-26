import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JavaScriptCallbacksComponent } from './java-script-callbacks/java-script-callbacks.component';
import { JavaScriptPromisesComponent } from './java-script-promises/java-script-promises.component';
import { JavaScriptsMapHigherLevelFunctionComponent } from './java-scripts-map-higher-level-function/java-scripts-map-higher-level-function.component';
import { JavaScriptsCreatorComponent } from './java-scripts-creator/java-scripts-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    JavaScriptCallbacksComponent,
    JavaScriptPromisesComponent,
    JavaScriptsMapHigherLevelFunctionComponent,
    JavaScriptsCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
