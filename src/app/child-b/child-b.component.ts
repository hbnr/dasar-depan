import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
})
export class ChildBComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<void>();
  someObservable$ = interval(500).pipe(
    tap(() => console.log('Emit from child B')),
  );

  ngOnInit() {
    this.someObservable$.pipe(takeUntil(this.destroyed$)).subscribe();
  }

  ngOnDestroy() {
    console.log('Child B got destroyed!');
    this.destroyed$.next();
  }
}
