import { AppPage } from './app.po';
import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, metaReducers } from '../src/app/reducers/index';
import { IState } from '../src/app/state';
import { inject } from '@angular/core/testing';

describe('financials App', () => {
  let page: AppPage;
  let store: Store<IState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, {metaReducers}),
      ]
    });
    page = new AppPage();
  });

  beforeEach(inject([Store], (storeService: Store<IState>) => {
    store = storeService;
  }));

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
