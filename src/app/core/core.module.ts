import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './http/http.service';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/index';

const toExport = [
    PagerComponent
];

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: toExport,
    declarations: [
        toExport
    ],
    providers: [],
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                HttpService
            ]
        };
    }
}
