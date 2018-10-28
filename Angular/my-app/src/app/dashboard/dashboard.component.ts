import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


export class Document { name: string; }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private forums: AngularFirestoreCollection<Document>;
  public forumArray: Observable<Document[]>;

  constructor(private afs: AngularFirestore) { 
    this.forums = afs.collection('forums');
    this.forumArray = this.forums.valueChanges();
  }
  ngOnInit() {
  }

}
