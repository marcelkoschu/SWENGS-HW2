import {Component, enableProdMode} from '@angular/core';
import {UserService} from "./service/user.service";
import '../icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'computermanager';

  isLoggedIn = false;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    })
  }
}
