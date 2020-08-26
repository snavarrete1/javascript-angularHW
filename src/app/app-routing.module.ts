import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaScriptPromisesComponent } from './java-script-promises/java-script-promises.component';
import { JavaScriptCallbacksComponent } from './java-script-callbacks/java-script-callbacks.component';
import { JavaScriptsMapHigherLevelFunctionComponent } from './java-scripts-map-higher-level-function/java-scripts-map-higher-level-function.component';
import { JavaScriptsCreatorComponent } from './java-scripts-creator/java-scripts-creator.component';





const routes: Routes = [

  {
    path: 'promises', component: JavaScriptPromisesComponent
  },
  {
    path: 'callbacks', component:JavaScriptCallbacksComponent
  },
  
  {
    path: 'map', component: JavaScriptsMapHigherLevelFunctionComponent
  },
  {
    path: 'creator', component: JavaScriptsCreatorComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
