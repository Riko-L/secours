import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage implements OnInit {

  loginName:string;
  constructor(private authService: AuthenticationService,private storage:Storage) { }

  ngOnInit() {
    this.loginName= sessionStorage.getItem('loginName');
  }

  logout() {
    this.authService.logout();
  }
}
