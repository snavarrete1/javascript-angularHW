import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-java-script-promises',
  templateUrl: './java-script-promises.component.html',
  styleUrls: ['./java-script-promises.component.scss']
})
export class JavaScriptPromisesComponent implements OnInit {
  hello = 'JavaScript-Promises';

  displayLanguage(){
    console.log('TypeScript in use for Angular')
  }

  displayEvent(event){
    console.log(`Angular Event ${event.target}`)
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
