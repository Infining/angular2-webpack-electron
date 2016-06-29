// Angular2
import { Component } from '@angular/core';

// Component
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
  selector: 'home',
  templateUrl: './src/app/components/home/home.component.html',
  styleUrls: [ './src/app/components/home/home.component.css' ],
  directives: [
                MD_LIST_DIRECTIVES,
                MD_GRID_LIST_DIRECTIVES
              ]
})

export class HomeComponent {

}
