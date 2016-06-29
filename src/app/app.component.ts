// Angular2
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

// Routing
import { provideRouter } from '@ngrx/router';
import { routes } from './app.routes.ts';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app',
  templateUrl: './src/app/app.component.html',
  styles: [ './src/app/app.component.css' ],
  directives: [ NavbarComponent ]
})

export class App {

}

bootstrap(App, [
  provideRouter(routes)
]).catch((err: any) => console.error(err));
