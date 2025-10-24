import { Component } from '@angular/core';
import { Experience } from '../experience/experience';
import { TEXTS } from '../../texts/texts';
import { LanguageService } from '../../services/languageService';
@Component({
  selector: 'app-home',
  imports: [Experience],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  lang: 'pt' | 'en' = 'pt';
  texts = TEXTS;

  constructor(private languageService: LanguageService) {
    this.languageService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }
}
