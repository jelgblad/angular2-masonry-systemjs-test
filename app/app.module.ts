import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
    imports: [BrowserModule, MasonryModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }