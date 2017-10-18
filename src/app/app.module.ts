import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { NavComponent } from './common/nav';
import { CoreModule } from './core/core.module';
import { GameInfoService } from './common/game-info';
import { GameInfoEffects } from './common/game-info/game-info.effects';

import { HomeComponent } from './common/home/home.component';
import { NotFoundComponent} from './common/home/error-pages/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '404', component: NotFoundComponent },
    { path: 'wgtv/list', loadChildren: './wgtv/wgtv.module#WgtvModule' },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),

        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([GameInfoEffects]),

        !environment.production ? StoreDevtoolsModule.instrument() : [],

        CoreModule.forRoot(),
    ],
    providers: [
        GameInfoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
