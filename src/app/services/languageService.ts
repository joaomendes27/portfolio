import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private langSubject = new BehaviorSubject<'pt' | 'en'>('pt');
  lang$ = this.langSubject.asObservable();

  setLang(lang: 'pt' | 'en') {
    this.langSubject.next(lang);
  }

  getLang() {
    return this.langSubject.value;
  }
}
