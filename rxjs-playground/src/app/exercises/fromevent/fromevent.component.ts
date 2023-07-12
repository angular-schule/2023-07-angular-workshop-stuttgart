import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, tap } from 'rxjs';

@Component({
  templateUrl: './fromevent.component.html',
  standalone: true
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(
      map(w => (w.target as Window).innerWidth),
      // tap(x => this.currentWidth = 1111), // impure!
      debounceTime(1000),
      startWith(2222),
      startWith(1111),
    ).subscribe(width => this.currentWidth = width);


    /******************************/
  }

}
