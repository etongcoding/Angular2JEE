import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>etongcoding testing</h1>
    <ul>
      <li *ngFor="let duke of dukes ">
          {{duke.name}} = {{duke.value}}
      </li>
    </ul>
  `
})
export class AppComponent { 
  dukes = [
      { "name": "One", "value": "1"}, 
      { "name": "Two", "value": "2"}, 
      { "name": "Three", "value":"3"} 
      ];
}
