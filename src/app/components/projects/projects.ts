import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  activeCard: string | null = null;

  openCard(card: string) {
    this.activeCard = card;
  }

  closeCard() {
    this.activeCard = null;
  }
}
