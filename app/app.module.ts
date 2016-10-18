import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {LittleTourHeroComponent} from "./little-tour-hero.component";
import {HeroFormComponent} from "./hero-form.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        LittleTourHeroComponent,
        HeroFormComponent
    ],
    bootstrap: [LittleTourHeroComponent]
})
export class AppModule {
}
