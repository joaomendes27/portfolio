import { Component } from '@angular/core';
import { TEXTS } from '../../texts/texts';
import { LanguageService } from '../../services/languageService';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class Experience {
  lang: 'pt' | 'en' = 'pt';
  texts = TEXTS;

  constructor(private languageService: LanguageService) {
    this.languageService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }
}
