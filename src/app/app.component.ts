import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { IState } from './state';
import * as fromTest from './common/test';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter$: Observable<number>;
  public title = 'app';

  constructor(private store: Store<IState>) {
    this.counter$ = this.store.select(fromRoot.getTestCounterValue);
  }

  public increment(): void {
    this.store.dispatch(new fromTest.IncrementCounter());
  }

  public decrement(): void {
    this.store.dispatch(new fromTest.DecrementCounter());
  }
}
