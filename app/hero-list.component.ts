import {OnInit, Component} from "@angular/core";
import {Hero} from "./app.component";
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector:    'hero-list',
    templateUrl: 'hero-list.component.html',
    providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private service: HeroService) { }

    ngOnInit() {
        this.heroes = this.service.getHeroes();
    }

    selectHero(hero: Hero) { this.selectedHero = hero; }
}
