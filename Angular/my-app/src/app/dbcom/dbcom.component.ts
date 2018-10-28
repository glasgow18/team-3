import { Component, OnInit } from '@angular/core';
import { Item } from '../forum/forum.component';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-dbcom',
  templateUrl: './dbcom.component.html',
  styleUrls: ['./dbcom.component.css']
})
export class DbcomComponent implements OnInit {

    item : Item = {
        name : "",
        flavour : "",
        type : ""
    }; 

    private itemsCollection: AngularFirestoreCollection<Item>;

    constructor(private afs: AngularFirestore) {
        this.itemsCollection = afs.collection<Item>('items');
    }

    addPost() {
        // const id = this.afs.createId();
        // const item: Item = { name, flavour, type };
        // this.itemsCollection.doc(id).set(item);
        this.itemsCollection.add(this.item);
    }

    ngOnInit() {

    }

  submitFood() {
    this.itemsCollection.add(this.item);
    this.item.name = "";
    this.item.type = "";
    this.item.flavour = "";
  }

}
