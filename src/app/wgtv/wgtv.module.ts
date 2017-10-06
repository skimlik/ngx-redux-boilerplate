import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WgtvListComponent } from './wgtv-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './wgtv.state';
import { EffectsModule } from '@ngrx/effects';
import { WgtvEffects } from './wgtv.effects';
import { WgtvService } from './wgtv.service';
import { CoreModule } from '../core/core.module';
import { WgtvTagsService } from './wgtv-tags.service';
import { WgtvTagEffects } from './wgtv-tags.effects';

const routes: Routes = [
  { path: '', component: WgtvListComponent }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),

      StoreModule.forFeature('wgtvList', reducers),
      EffectsModule.forFeature([WgtvTagEffects, WgtvEffects]),

      CoreModule
  ],
  exports: [],
  declarations: [WgtvListComponent],
  providers: [WgtvService, WgtvTagsService],
})
export class WgtvModule {
}
