import {
  Observable,
  combineLatest,
  filter,
  forkJoin,
  from,
  fromEvent,
  interval,
  of,
  timer,
  map,
  take,
  tap,
  debounceTime,
  catchError,
  concatMap,
  switchMap,
  mergeMap,
  Subject,
  BehaviorSubject,
} from "rxjs";

// get

let chapterNumber = 0;

const button = document.querySelector("#chapterSelection");

if (button) {
  const fromEventObservable = fromEvent<MouseEvent>(button, "click");
  fromEventObservable.subscribe(() => {
    chapterNumber = Number(
      document.querySelector<HTMLInputElement>("#chapter-number")?.value
    );
    showChapter(chapterNumber);
  });
}

// Observable is a class that takes a function as an argument
// The function takes a subscriber as an argument
function showChapter(chapterNumber: number): void {
  switch (chapterNumber) {
    // case 1 or case 2 just console.log 1
    case 1:
    case 2:
      const someObservable$ = new Observable<string>((subscriber) => {
        subscriber.next("Alice");
        subscriber.next("Ben");
        subscriber.next("Charlie");
        subscriber.complete();
      });

      // Observer is an object that has three methods to react to the notifications of the Observable

      const observer = {
        next: (value: string) => console.log(value),
        complete: () => console.log("Completed"),
        error: (error: Error) => console.log(error),
      };

      // Subscription is an object that has a method to subscribe to the Observable and a method to unsubscribe from the Observable

      const subscription = someObservable$.subscribe(observer);

      // If we just want to react to the next value, we can just pass a call back function

      const subscription2 = someObservable$.subscribe((value) =>
        console.log(value)
      );

      // If we don't want to receive more data, we just unsubscribe from the Observable
      subscription.unsubscribe();
      subscription2.unsubscribe();

      //An error or a complete notification will automatically unsubscribe from the Observable
      const subscription3 = someObservable$.subscribe((value) =>
        console.log("subs3: " + value)
      );
      const subscription4 = someObservable$.subscribe((value) =>
        console.log("subs4: " + value)
      );

      subscription3.unsubscribe();
      subscription4.unsubscribe();
      console.log("<----------------------------------->");
      // Multiple subscriptions

      break;

    case 3:
    case 4:
      // Subscriptions are independent from each other, each time all values will be emitted

      console.log("<----------------------------------->");

      const observable2$ = new Observable<number>((subscriber) => {
        setTimeout(() => {
          subscriber.next(3);
          subscriber.complete();
        }, 2000);
      });

      const fullObserver = {
        next: (value: number) => console.log(value),
        complete: () => console.log("Completed"),
        error: (error: Error) => console.log(error),
      };

      const subscription5 = observable2$.subscribe(fullObserver);

      setTimeout(() => {
        subscription5.unsubscribe();
      }, 3000);

      // Hot and cold observables
      // Cold observables are observables that start emitting values when we subscribe to them, are independent from each other and emit all values to each subscription
      // Hot observables are observables that start emitting values before we subscribe to them, are shared between subscriptions and emit values only once to all subscriptions
      break;

    case 5:
      // Operators

      // CREATION OPERATORS

      // of

      // Create an observable with the values gives and then complete
      console.log("<----------------------------------->");

      const ofObservable = of("apple", "bread", "rice", "yellow");

      const ofObserver = {
        next: (value: any) => console.log(value),
        complete: () => console.log("completed"),
      };

      ofObservable.subscribe(ofObserver);

      // from
      // same as of, but this time you can provide a simple argument, it can be an array, a promise, etc...
      const fromObservable = from<string[]>([
        "apple",
        "bread",
        "rice",
        "yellow",
      ]);

      fromObservable.subscribe(ofObserver);

      // fromEvent
      // create an observable from an event

      const button = document.querySelector("button#trigger");

      if (button) {
        const fromEventObservable = fromEvent<MouseEvent>(button, "click");
        const fromEventSubscription = fromEventObservable.subscribe(() => {
          console.log("clicked and subscription finished");
          fromEventSubscription.unsubscribe();
        });
      }

      // timer
      // wait for a time then emits a 0, it works for add a delays in code

      const timerSub = timer(2000).subscribe((value) => {
        console.log(value);
      });

      setTimeout(() => timerSub.unsubscribe(), 2500);

      // interval
      // Creates and observable that emits sequential numbers every specified interval of time

      const interval$ = interval(2000).subscribe((value) => console.log(value));

      setTimeout(() => interval$.unsubscribe(), 10000);

      // forkJoin
      //  it accepts multiple observables and combine the LATEST values in an array and then complete, just emit once
      // if any observable emits an error, forkjoin emits an error and finished the subscription
      forkJoin([of(1, 2), of(3, 4), timer(100)]).subscribe((value) =>
        console.log(value)
      );

      // combineLatest
      // it combines the last value of each observable in an array, it needs an initial value of each observable to begin to emit, it completes when all observables complete
      // if any observable emits an error, combinelatest emits an error and finished the subscription

      combineLatest([of(1, "test"), timer(5000)]).subscribe((value) =>
        console.log(value)
      );

      console.log("<----------------------------------->");
      break;

    case 6:
      // Pipeable Operators

      // Pipe

      // it helps to stack operators

      const fromObservable2$ = from(["white", "yellow", "red"]);
      const ofObservable2$ = of("a", "b", "c", "d");

      // filter

      const filterExample = fromObservable2$.pipe(
        filter((value) => value === "white")
      );

      const filterExampleSub = filterExample.subscribe((value) =>
        console.log(value)
      );

      // map
      // it calculates a new value based on the value emitted by the source observable
      const mapExample$ = ofObservable2$.pipe(
        map((value) => value + "map worked")
      );

      const mapExampleSubscription = mapExample$.subscribe((value) =>
        console.log(value)
      );

      // tap
      // used to perform side effects, regularly to debug

      const tapExample$ = ofObservable2$.pipe(
        filter((value) => value === "a"),
        map((value) => value + "1"),
        tap((value) => console.log(value))
      );

      // debounce
      // it waits a certain time before emits a value, if a new value enters in that time, emits that value, if not, emits the last value that was in queue

      const tapExampleSubscription = tapExample$.subscribe();

      const debounceExample$ = ofObservable2$.pipe(
        debounceTime(2000),
        tap((value) =>
          console.log("this is last value that we got in 2 seconds: " + value)
        )
      );

      const debounceExampleSub = debounceExample$.subscribe();

      // catchError
      // operator to handle error, it activate it only when an error is emitted, it subscribes to a new observable

      const observableWithError$ = of("1", "2", "3");

      const catchErrorExample$ = observableWithError$.pipe(
        map((value) => {
          if (value === "3") throw new Error();
          return value;
        }),
        catchError((err) => of("Error handled")),
        tap((value) => console.log(value))
      );

      const catchErrorExampleSubscription = catchErrorExample$.subscribe();

      // Flattening operators
      // They are used to work with observables that emit observables
      // concatMap wait for the first observable to complete before subscribe to the next observable

      const simpleObservable$ = of("9", "8", "7");
      const simpleObservable2$ = of("1");
      const concatMapExample$ = simpleObservable$.pipe(
        concatMap((value) => simpleObservable2$)
      );

      const concatMapSub2 = simpleObservable2$.subscribe((value) =>
        console.log(value)
      );

      const concatMapSub = concatMapExample$.subscribe();

      // switchMap
      // it cancels the previous observable and subscribe to the new one when a new value is emitted

      const switchMapExample$ = simpleObservable$.pipe(
        switchMap((value) => simpleObservable2$)
      );

      const switchMapSub = switchMapExample$.subscribe((value) =>
        console.log(value)
      );

      // mergeMap
      // it subscribes to all observables at the same time and emits all values

      const mergeMapExample$ = simpleObservable$.pipe(
        mergeMap((value) => simpleObservable2$)
      );

      const mergeMapSub = mergeMapExample$.subscribe((value) =>
        console.log(value)
      );

      filterExampleSub.unsubscribe();
      mapExampleSubscription.unsubscribe();
      tapExampleSubscription.unsubscribe();
      debounceExampleSub.unsubscribe();
      catchErrorExampleSubscription.unsubscribe();
      concatMapSub.unsubscribe();
      switchMapSub.unsubscribe();
      mergeMapSub.unsubscribe();

      break;

    case 7:
      // subjects
      // it is an special case of an observable that can emit values and subscribe to values

      const simpleObservable3$ = of(9, 8, 7);
      const subject = new Subject<number>();

      subject.subscribe((value) => console.log("A:" + value));
      subject.subscribe((value) => console.log("B:" + value));

      subject.next(1);

      subject.complete();

      const simpleObservable4$ = of(6, 5, 4);
      const subject2 = new Subject<number>();
      subject2.subscribe((value) => console.log("C:" + value));
      subject2.subscribe((value) => console.log("D:" + value));
      simpleObservable4$.subscribe(subject2);

      // behaviour subject
      // it is a subject that needs an initial value, it emits the last value to new subscribers

      const lastObservable$ = new BehaviorSubject<number>(0);
      lastObservable$.subscribe((value) => console.log("E:" + value));

      break;
  }
}
