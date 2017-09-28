import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './http/http.service';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [],
    declarations: [],
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
