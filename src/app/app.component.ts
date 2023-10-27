import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showChildA$ = new BehaviorSubject(false);
  showChildB$ = new BehaviorSubject(false);
  showChildC$ = new BehaviorSubject(false);
  showChildD$ = new BehaviorSubject(false);

  toggleChildA() {
    this.showChildA$.next(!this.showChildA$.value);
  }

  toggleChildB() {
    this.showChildB$.next(!this.showChildB$.value);
  }

  toggleChildC() {
    this.showChildC$.next(!this.showChildC$.value);
  }

  toggleChildD() {
    this.showChildD$.next(!this.showChildD$.value);
  }
}
