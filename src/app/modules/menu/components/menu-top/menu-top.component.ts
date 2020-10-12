import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/authen/services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  count=1;
  user:firebase.User;
  constructor(private logout:LoginService) {
    this.logout.getCurrentUser().subscribe(user=>this.user=user)
   }

  ngOnInit(): void {
  }
  logOut(){
   this.logout.logOut();
  }

}
