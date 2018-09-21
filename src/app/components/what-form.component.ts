import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-what-form',
    template: `
        <div>
            <div *ngIf="formVisibility">
                <input
                    [(ngModel)]="name"
                    placeholder="name what?"
                />
                <br />
                <input
                    [(ngModel)]="def"
                    placeholder="what is what?"
                />
                <br />
                <div>
                    <button (click)="addWhat()">Add</button>
                    <button (click)="toggleForm()">Cancel</button>
                </div>
                <br />
            </div>
            <button *ngIf="!formVisibility" (click)="toggleForm()">+</button>
        </div>
        `
})
export class WhatFormComponent {
    name = '';
    def = '';
    @Input()
    formVisibility;

    @Output()
    onAddWhat = new EventEmitter();

    @Output()
    onToggleForm = new EventEmitter();

    addWhat(){
        const payload = {
            name: this.name,
            def: this.def
        }
        this.onAddWhat.emit(payload);
    }
    toggleForm(){
        this.onToggleForm.emit();
    }

 }
