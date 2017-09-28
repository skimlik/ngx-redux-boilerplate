import { Component, OnInit } from '@angular/core';
import { IState } from '../../state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromGameInfo from '../game-info';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  public updatedAt$: Observable<Date>;

  constructor(private store: Store<IState>) {
      this.updatedAt$ = this.store.select(fromGameInfo.getTanksUpdated);
  }

  public ngOnInit() {
  }
}
