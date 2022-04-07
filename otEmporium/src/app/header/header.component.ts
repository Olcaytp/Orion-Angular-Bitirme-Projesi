import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login:boolean;
  constructor(private dataService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.dataService.login.subscribe(data => {
      this.login = data;
    });
    if(localStorage.getItem('user')){
      this.login = true;
    }
  }
  onLogout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.login = false;
    this.dataService.login.next(false);
  }

  //this function was defined for login control.  for Ng If

  loginControl() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

}
