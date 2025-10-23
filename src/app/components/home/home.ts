import { Component } from '@angular/core';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-home',
  imports: [Experience],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {}
