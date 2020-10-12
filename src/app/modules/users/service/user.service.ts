import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }
  saveUser(user:firebase.User){
    this.db.object('/users/'+user.uid).update(
      {
        
        name:user.displayName,
        email:user.email
      }
    )
  }

  // getUserByuid(uid:string){
  //   this.db.object('/users/'+uid).snapshotChanges().
  //         pipe(map(user=>{
  //           let objectUser:any=user.payload.val()
  //           objectUser.id=user.payload.key;
  //           return objectUser
  //           })
  //         )
  // }

    // getUsers(){
    //   this.db.list('/users/').snapshotChanges()
    //   .pipe(map(changes=>changes.map(c=>({
    //     key:c.payload.key, ...c.payload.val() as {}
    //   }))))
    // }
}
