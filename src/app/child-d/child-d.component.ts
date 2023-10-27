import { Component, OnDestroy, OnInit } from '@angular/core';
import { firstValueFrom, interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-child-d',
  templateUrl: './child-d.component.html',
})
export class ChildDComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<void>();
  someObservable$ = interval(2000).pipe(
    tap(() => console.log('Emit from child D')),
  );

  async ngOnInit() {
    await firstValueFrom(
      this.someObservable$.pipe(takeUntil(this.destroyed$)),
      { defaultValue: null },
    );
  }

  ngOnDestroy() {
    console.log('Child D got destroyed!');
    this.destroyed$.next();
  }
}
