import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromGameInfo from '../game-info';
import { IGameInfo } from '../game-info/models/game-info';

@Component({
    selector: 'app-navigation',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss']
})

export class NavComponent implements OnInit {
    public version$: Observable<string>;

    @Input()
    public title: string;

    constructor(private store: Store<IGameInfo>) {
        this.version$ = this.store.select(fromGameInfo.getVersion);
        this.getVersion();
    }

    public ngOnInit() {
    }

    private getVersion(): void {
      this.store.dispatch(new fromGameInfo.GetInfo());
    }
}
