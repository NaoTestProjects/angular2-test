import {Component} from '@angular/core';

@Component({
    selector: 'pls-app',
    template: `
        <pls-title [subtitle]="subtitle"></pls-title>     
    `
})
export class AppComponent {
    subtitle = '(v1)';
}

