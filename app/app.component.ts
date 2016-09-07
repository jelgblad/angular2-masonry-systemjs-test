import { Component } from '@angular/core';
import { AngularMasonryBrick } from 'angular2-masonry';

@Component({
    selector: 'my-app',
    template: `
    <masonry [useImagesLoaded]="false">
        <masonry-brick *ngFor="let brick of bricks">{{brick}}</masonry-brick>
    </masonry>
    `
})
export class AppComponent { 

    bricks = [
        0,2,3,4,5,6,7,8,9,10,11
    ]

    test:AngularMasonryBrick;

    constructor(){
        
    }
}