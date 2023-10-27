import { Component, OnDestroy, OnInit } from '@angular/core';
import { firstValueFrom, interval, tap } from 'rxjs';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
})
export class ChildCComponent implements OnInit, OnDestroy {
  someObservable$ = interval(2000).pipe(
    tap(() => console.log('Emit from child C')),
  );

  async ngOnInit() {
    await firstValueFrom(this.someObservable$);
  }

  ngOnDestroy() {
    console.log('Child C got destroyed!');
  }
}
