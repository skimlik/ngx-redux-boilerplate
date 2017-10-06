import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unixdate'
})

export class UnixDatePipe implements PipeTransform {
    transform(value: number): Date | number {
        if (!value) {
            return value;
        }
        return new Date(value * 1000);
    }
}
