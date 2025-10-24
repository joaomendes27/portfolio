import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { TEXTS } from './texts/texts';
import { LanguageService } from './services/languageService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Experience, Projects, Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('meu-portfolio');
  lang: 'pt' | 'en' = 'pt';
  texts = TEXTS;

  constructor(private languageService: LanguageService) {
    this.languageService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  toggleLang() {
    const newLang = this.languageService.getLang() === 'pt' ? 'en' : 'pt';
    this.languageService.setLang(newLang);
  }
}
