import { Component } from '@angular/core';
import { TEXTS } from '../../texts/texts';
import { LanguageService } from '../../services/languageService';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  imports: [LottieComponent],
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
