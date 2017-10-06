import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <div class="spinner text-center" *ngIf="busy">
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span>
        <div>
    `
})

export class SpinnerComponent {
    @Input()
    public busy = false;

    constructor() { }
}
