import { Component, OnInit } from '@angular/core';
import {
  Observable,
  concat,
  concatMap,
  exhaustMap,
  from,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  of,
  shareReplay,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  observable1$ = of({
    name: 'bob',
    age: '26',
    color: 'red',
  });
  observable2$ = from([
    {
      name: 'bob',
      age: '26',
      color: 'red',
    },
    {
      name: 'alice',
      age: '26',
      color: 'blue',
    },
    {
      name: 'ryan',
      age: '30',
      color: 'white',
    },
  ]);

  observable3$ = interval(2000);

  name = '';
  age = '';
  color = '';

  ngOnInit(): void {
    // imperative design (anti pattern)
    this.imperativeDesignExample();
    this.shareReplayExample();
    this.exhaustMapExample();
  }

  concatExample(): void {
    // concat operator, literally concat all values in just one observable
    const source1$ = of(6, 5, 4);
    const source2$ = of(3, 2, 1);
    const source3$ = of(0);
    const result$ = concat(source1$, source2$, source3$).subscribe((value) =>
      console.log(value)
    );
  }

  concatMapExample(): void {
    // flat operator, wait until the observable complete and then it subscribe to the another one
    const source1$ = of(6, 5, 4);
    const source2$ = of(3, 2, 1);
    const result$ = source1$
      .pipe(concatMap(() => source2$))
      .subscribe((value) => console.log(value));
  }

  mergeExample(): void {
    // merge operator, same as concat, but this don't wait for each observable to complete, it return the values att he time that they come
    const source1$ = of(6, 5, 4);
    const source2$ = of(3, 2, 1);
    const source3$ = of(0);
    const result$ = merge(source1$, source2$, source3$).subscribe((value) =>
      console.log(value)
    );
  }

  mergeMapExample(): void {
    // mergeMap operator, same as concatMap, but this don't wait for each observable to complete, it return the values att he time that they come
    const source1$ = of(6, 5, 4);
    const result$ = source1$
      .pipe(mergeMap((value: number) => of(value * 2)))
      .subscribe((value) => console.log(value));
  }

  exhaustMapExample(): void {
    const clicks = fromEvent(document, 'click');

    clicks
      .pipe(exhaustMap((ev) => interval(1000)))
      .subscribe((value) => console.log('click'));
  }

  imperativeDesignExample(): void {
    this.observable1$.subscribe((value) => {
      this.name = value.name;
      this.age = value.age;
      this.color = value.color;
    });
  }

  shareReplayExample(): void {
    // shareReplay operator, it transform a cold observable into a hot one, and if a new subscriber gets in, it resume the last values
    const sub1 = timer(6000)
      .pipe(concatMap(() => this.observable3$))
      .subscribe((value) => console.log('1: ' + value));
    const sub2 = this.observable3$.subscribe((value) =>
      console.log('2: ' + value)
    );
    const sub3 = this.observable3$.subscribe((value) =>
      console.log('3: ' + value)
    );

    setTimeout(() => {
      sub1.unsubscribe();
      sub2.unsubscribe();
      sub3.unsubscribe();
    }, 10000);

    const observableWithReplay$ = this.observable3$.pipe(
      map((value) => value),
      shareReplay()
    );

    setTimeout(() => {
      const sub4 = timer(8000)
        .pipe(concatMap(() => observableWithReplay$))
        .subscribe((value) => console.log('1: ' + value));
      const sub5 = observableWithReplay$.subscribe((value) =>
        console.log('2: ' + value)
      );
      const sub6 = observableWithReplay$.subscribe((value) =>
        console.log('3: ' + value)
      );
    }, 1100);
  }
}
