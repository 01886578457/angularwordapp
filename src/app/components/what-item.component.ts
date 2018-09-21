import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-what-item',
    template: `
        <div>
            <h2>{{what.name}}</h2>
            <p>{{what.remember ? '******' : what.def}}</p>
            <div>
                <button (click)="toggleWhat(what._id)">{{what.remember ? 'Forgot' : 'Remembered'}}</button>
                <button (click)="removeWhat(what._id)">Remove</button>
            </div>
        </div>
        `
})
export class WhatItemComponent {
    @Input()
    what;

    @Output()
    onToggleWhat = new EventEmitter();
    @Output()
    onRemoveWhat = new EventEmitter();

    toggleWhat(_id){
        this.onToggleWhat.emit(_id);
    }
    removeWhat(_id){
        this.onRemoveWhat.emit(_id);
    }

 }
