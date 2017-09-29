import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import * as fromActions from './wgtv-tags.actions';
import { WgtvTagsService } from './wgtv-tags.service';

@Injectable()
export class WgtvTagEffects {

    constructor(private actions: Actions, private wgtvTags: WgtvTagsService) {
    }

    fetchTags$ = this.actions.ofType(fromActions.WGTV_TAGS_GET)
        .exhaustMap(m =>
            this.wgtvTags.getTags().map(map =>
                new fromActions.FetchTags(map.data)
            )
        );
}
