import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-what-filter',
    template: `
        <div>
            <select [value]="filter" (change)="filterChange($event)">
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
                <option value="SHOW_REMEMBERED">SHOW REMEMBER</option>
            </select>
        </div>
        `
})
export class WhatFilterComponent { 
@Input()
filter;
@Output()
onFilterChange = new EventEmitter();

filterChange(event){
    this.onFilterChange.emit(event.target.value);
}

}
