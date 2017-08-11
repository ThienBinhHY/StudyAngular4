import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';//OnInit laf 1 interface
/*https://www.youtube.com/watch?v=M0pmltrWNrE&index=5&list=PLWBrqglnjNl3RKqr6Opr9Ad4th8w0IAPZ
Tạo một trang Master/Detail căn bản.
source code tren github: https://github.com/sunlight3d/angular4_tutorials/tree/master/Angular%204%20tutorial-5.Master-detail%20page%20with%20a%20list%20of%20users/angularTutorialProject/src/app*/

@Component({
  selector: 'app-root',
  templateUrl: './template/app.component.html',
  /*
  Viết html luôn ở đây thì dùng cú pháp như sau
  template: '<h2>{{user.email}}</h2>'
  */
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  title = 'This App by Thiên Bình';
  users: User[];
  selectedUser: User;
  onSelect(clickUser: User): void {
    this.selectedUser = clickUser;
  }
  user: User = {
    id: 1,
    name: 'Dao Thi Quy',
    age: 24,
    email: 'daoquy.uneti@gmail.com'
  }

  constructor(private userService: UserService) {

  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }
}

