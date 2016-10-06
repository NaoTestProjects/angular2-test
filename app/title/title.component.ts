import { Component, Input } from '@angular/core';
import {UserService} from "../user.service";

@Component({
    moduleId: module.id,
    selector: 'pls-title',
    templateUrl: 'title.component.html',
})
export class TitleComponent {

    @Input() subtitle = '';
    title = 'Private Lesson Scheduler';

    user = '';

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}
