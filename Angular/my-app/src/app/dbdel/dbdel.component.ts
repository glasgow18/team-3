import { Component, OnInit } from '@angular/core';
import { Item } from '../forum/forum.component';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-dbdel',
  templateUrl: './dbdel.component.html',
  styleUrls: ['./dbdel.component.css']
})
export class DbdelComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDocument: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
  }

  deleteFood() {
    var i = 0;
    for(var doc in this.itemsCollection) {
      this.itemDocument = this.itemsCollection.doc(doc);
      this.itemDocument.delete;
      console.log(doc);
    }
    this.itemDocument.delete();
  }

  ngOnInit() {
  }

}
