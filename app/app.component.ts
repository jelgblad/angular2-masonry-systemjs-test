import { Component } from '@angular/core';
import { AngularMasonry, AngularMasonryBrick } from 'angular2-masonry';

import { Subject } from 'rxjs';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <button (click)="newBrick()">New brick</button>
    </div>

    <masonry #masonry [useImagesLoaded]="false">
        <masonry-brick *ngFor="let brick of (observableBricks | async)">
            <h3>{{brick.title}}</h3>
            <button (click)="showMore(masonry, brick)">Show more</button>
            <div *ngIf="brick.expanded">
                More text!
            </div>
        </masonry-brick>
    </masonry>
    `
})
export class AppComponent {

    bricks = [

    ]

    test: AngularMasonryBrick;

    observableBricks: Subject<any[]>;

    constructor() {
        this.observableBricks = new Subject<any[]>();

        this.observableBricks.subscribe(() => {
            console.log('change');
        });
    }

    newBrick() {

        this.bricks.push({
            title: Math.floor(Math.random() * 100) + 1,
            expanded: false
        });

        this.observableBricks.next(this.bricks);

        console.log(this.bricks);
    }

    showMore(masonry: AngularMasonry, item) {

        item.expanded = !item.expanded;

        masonry.layout();
    }
}