import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      no: 1,
      id: 4527,
      OrderName: 'Fruits',
      amount: '4500'
    },
    {
      no: 2,
      id: 4554,
      OrderName: 'Drinks',
      amount: '5400'
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.no = this.upersons.length + 1;
    this.upersons.push(user);

  }

  userDetails(user: User){
    const index = this.upersons.findIndex(u => user.no === u.no);
    this.upersons[index] = user;
  }

  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.no === u.no);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
