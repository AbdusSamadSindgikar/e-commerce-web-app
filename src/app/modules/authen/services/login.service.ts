import { Injectable, OnInit, OnChanges } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase'
import { CanActivate, Router } from '@angular/router';
import {map, switchMap} from 'rxjs/operators'
import { Observable } from 'rxjs';

import { UserService } from '../../users/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

   constructor(private login:AngularFireAuth,private userService:UserService,private router:Router) {
    this.login.authState.subscribe(user=>{

      this.userService.saveUser(user);
      // console.log(user)
   })
  }
  loginWithGoogle(){
   this.authentication(new firebase.auth.GoogleAuthProvider())
  }

  authentication(provider){
    this.login.signInWithRedirect(provider)
  }

  logOut(){
   return this.login.signOut()
  }
  getCurrentUser(){
    return this.login.authState;
  }

  canActivate():Observable<boolean>{
    return this.login.authState.
          pipe(map(user=>{
            if(user) return true;
            else 
            this.router.navigate['/login'];
            return false;
          }))
  }
  
  
  // getCurrentUserForDb() {
  // return this.login.authState.
  //         pipe(
  //           switchMap(user =>{
  //            return this.userService.getUserByuid(user.uid)
  //           }),
  //           map(user=>{
  //             return user;
  //           })
  //         )
  // }
}
