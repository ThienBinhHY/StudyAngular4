import { Component, Input } from '@angular/core';
import { User } from './models/user'

@Component({
    //"user-detail" will be a CSS selector
    selector: 'user-detail',
    templateUrl: './template/user-detail.html',
    styleUrls: ['./app.component.css']
})
//"export" => allow other file can access, or "public"
export class UserDetailComponent {
    @Input() selectedUser: User;
}