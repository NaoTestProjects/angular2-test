import {Component} from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
        <div>
            <input #box (keyup.enter)="0">
            <p>{{box.value}}</p>
        </div>
        
        
    `
})
export class AppComponent {
    hero: Hero = {
        id: 1,
        name: "test 111"
    };

    title = 'Tour of Heroes';
}



