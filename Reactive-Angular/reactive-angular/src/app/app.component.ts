import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public titleImperativeStyle: string = '';
  public completedImperativeStyle: boolean = false;
  public titleReactiveStyle$: Observable<string> | undefined;
  public completedReactiveStyle$: Observable<boolean> | undefined;
  public title = '';

  ngOnInit(): void {
    // Imperative style
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response: any) => {
        this.titleImperativeStyle = response.title;
        this.completedImperativeStyle = response.completed;
      });

    // Reactive style
    const responseApi$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    this.titleReactiveStyle$ = responseApi$.pipe(
      map((response: any) => response.title)
    );
    this.completedReactiveStyle$ = responseApi$.pipe(
      map((response: any) => response.completed)
    );
  }

  constructor(private http: HttpClient) {}
}
