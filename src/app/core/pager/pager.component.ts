import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pager-component',
    templateUrl: 'pager.component.html'
})
export class PagerComponent {
    @Output()
    public onCurrent = new EventEmitter<number>();

    @Input()
    public total = 1;

    @Input()
    public current = 1;

    public get items(): number[] {
        return Array.apply(null, {length: this.total}).map(Function.call, Number);
    }

    public select(pageNo: number): void {
        this.onCurrent.emit(pageNo);
        this.setCurrent(pageNo);
    }

    public moveForward(pageNo: number): void {
        if (pageNo < this.total) {
            this.select(pageNo + 1);
        }
    }

    public moveBack(pageNo: number): void {
        if (pageNo > 1) {
            this.select(pageNo - 1);
        }
    }

    private setCurrent(pageNo: number): void {
        this.current = pageNo;
    }
}
