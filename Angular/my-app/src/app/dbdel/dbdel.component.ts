import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export class Item { name: string; type: string; flavour: string}

@Component({
  selector: 'app-dbdel',
  templateUrl: './dbdel.component.html',
  styleUrls: ['./dbdel.component.css']
})
export class DbdelComponent implements OnInit {
  private forums: AngularFirestoreCollection<Document>;
  private forum: AngularFirestoreDocument<Document>;
  private threads: AngularFirestoreCollection<Document>;
  private threadB: AngularFirestoreDocument<Document>;
  private specificThread: AngularFirestoreCollection<Document>;
  public messages: Observable<Document[]>;
  public title = "";
  public thread = "";

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
      this.forums = afs.collection('forums');

  }

  ngOnInit(): void {
    this.getTitle();
    console.log(this.title, this.thread);
    this.forum = this.forums.doc(this.title);
    this.threads = this.forum.collection('threads');
    this.threadB = this.threads.doc(this.thread);
    this.specificThread = this.threadB.collection('messages');
    this.messages = this.specificThread.valueChanges();
}

getTitle(): void {
  this.title = this.route.snapshot.paramMap.get('title');
  this.thread = this.route.snapshot.paramMap.get('thread');
}
}
