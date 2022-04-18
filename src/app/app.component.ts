import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Elton';
  userData = {
    email: 'elton@gmail.com',
    idade: 20,
  };
  title = 'curso-angular';
}
