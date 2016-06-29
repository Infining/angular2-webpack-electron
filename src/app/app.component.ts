// Angular2
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

// Routing
import { provideRouter, Router } from '@ngrx/router';
import { routes } from './app.routes.ts';

// Components
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app',
  templateUrl: './src/app/app.component.html',
  styleUrls: [ './src/app/app.component.css' ],
  directives: [
                MD_SIDENAV_DIRECTIVES,
                MD_TOOLBAR_DIRECTIVES,
                MD_LIST_DIRECTIVES
              ]
})

export class App {

  constructor (private router: Router) {}

  // auto navigate to root route
  ngOnInit () {
    this.router.go('/');
  }

}

bootstrap(App, [
  provideRouter(routes),
  HTTP_PROVIDERS
]).catch((err: any) => console.error(err));
