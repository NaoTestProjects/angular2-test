import {OnInit, Component} from "@angular/core";
import {Hero} from "./app.component";
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'little-tour-hero',
    template: `
            <input #newHero (keyup.enter)="addHero(newHero.value)" (blur)="addHero(newHero.value); newHero.value=''">
        
            <button (click)=addHero(newHero.value)>Add</button>
        
            <ul>
                <li *ngFor="let hero of heroes">{{hero}}</li>
            </ul> 
             
            <hero-form></hero-form> 
        `

})
export class LittleTourHeroComponent {

    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
}
