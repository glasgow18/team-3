import { Component, OnInit } from '@angular/core';

import { Item } from '../forum/forum.component';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-dbcom',
  templateUrl: './dbcom.component.html',
  styleUrls: ['./dbcom.component.css']
})
export class DbcomComponent implements OnInit {

  item: Item = {
    name: "",
    type: "",
    flavour: ""
  };

  private itemsCollection: AngularFirestoreCollection<Item>;

    constructor(private afs: AngularFirestore) {
        this.itemsCollection = afs.collection<Item>('items');
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
