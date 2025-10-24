import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEXTS } from '../../texts/texts';
import { LanguageService } from '../../services/languageService';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  activeCard: string | null = null;
  lang: 'pt' | 'en' = 'pt';
  texts = TEXTS;

  constructor(private languageService: LanguageService) {
    this.languageService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  openCard(card: string) {
    this.activeCard = card;
  }

  closeCard() {
    this.activeCard = null;
  }
}
