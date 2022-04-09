import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['Gosho', 'Pesho']
  title = 'components';

  newUserHandler(newUser: string): void{
    this.users.push(newUser);
  }
}
