import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
})
export class ChildAComponent implements OnInit, OnDestroy {
  someObservable$ = interval(500).pipe(
    tap(() => console.log('Emit from child A')),
  );

  ngOnInit() {
    this.someObservable$.subscribe();
  }

  ngOnDestroy() {
    console.log('Child A got destroyed!');
  }
}
