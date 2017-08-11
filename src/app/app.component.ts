import { Component } from '@angular/core';
import { User } from './models/user';
/*https://www.youtube.com/watch?v=M0pmltrWNrE&index=5&list=PLWBrqglnjNl3RKqr6Opr9Ad4th8w0IAPZ
Tạo một trang Master/Detail căn bản.
source code tren github: https://github.com/sunlight3d/angular4_tutorials/tree/master/Angular%204%20tutorial-5.Master-detail%20page%20with%20a%20list%20of%20users/angularTutorialProject/src/app*/
const USERS: User[] = [
  {
    id: 1,
    name: 'Tran Thi Hang',
    age: 24,
    email: 'hangtran.uneti@gmail.com'
  }, {
    id: 2,
    name: 'Ngo Thi Hang',
    age: 25,
    email: 'hangngo.uneti@gmail.com'
  }, {
    id: 3,
    name: 'Tran Thi Huong',
    age: 24,
    email: 'huongtran.uneti@gmail.com'
  }, {
    id: 4,
    name: 'Tran Xuan Hung',
    age: 29,
    email: 'hungtran.uneti@gmail.com'
  }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*
  Viết html luôn ở đây thì dùng cú pháp như sau
  template: '<h2>{{user.email}}</h2>'
  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This App by Thiên Bình';
  users = USERS;
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
}

