// Angular2
import { Component } from '@angular/core';

// Component
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  selector: 'navbar',
  templateUrl: './src/app/components/navbar/navbar.component.html',
  styleUrls: [ './src/app/components/navbar/navbar.component.css' ],
  directives: [ MD_TOOLBAR_DIRECTIVES ]
})

export class NavbarComponent {

}
