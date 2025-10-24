import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Experience, Projects, Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('meu-portfolio');
}
