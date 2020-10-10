import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db:AngularFireDatabase) { }

  getAllCourses(){
    return this.db.list('/courses').snapshotChanges()
            .pipe(map(changes=>changes.map(c=>({
              key:c.payload.key, ...c.payload.val() as {}
            }))))
  }
}
