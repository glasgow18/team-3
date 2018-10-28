import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
 
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface Document { name: string;}

@Component({
    selector: 'app-forum',
    templateUrl: './forumPL.component.html',
    styleUrls: ['./forumPL.component.css']
})




export class ForumPLComponent implements OnInit {
    private forums: AngularFirestoreCollection<Document>;
    private forum: AngularFirestoreDocument<Document>;
    private threads: AngularFirestoreCollection<Document>;
    public messages: Observable<Document[]>;
    title = "";

    constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
        this.forums = afs.collection('forums');

    }

    ngOnInit(): void {
    this.title = this.getTitle();
        this.forum = this.forums.doc(this.title);
        this.threads = this.forum.collection('threads');
        this.messages = this.threads.valueChanges();
  }

  getTitle(): string {
    const title = this.route.snapshot.paramMap.get('title');
    console.log(title);
    return title;
  }
}