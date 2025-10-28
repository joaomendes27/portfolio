import { Component } from '@angular/core';
import { TEXTS } from '../../texts/texts';
import { LanguageService } from '../../services/languageService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  lang: 'pt' | 'en' = 'pt';
  texts = TEXTS;

  constructor(private languageService: LanguageService) {
    this.languageService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }
}
