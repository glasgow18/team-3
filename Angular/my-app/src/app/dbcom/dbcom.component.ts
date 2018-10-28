import { Component, OnInit } from '@angular/core';
import { Item } from '../forum/forum.component';
import { ForumComponent } from '../forum/forum.component';
import { Observable } from 'rxjs/Observable';

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
    items: Observable<Item[]>;

    constructor(private afs: AngularFirestore) {
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.valueChanges();
    }

    addPost() {
        // const id = this.afs.createId();
        // const item: Item = { name, flavour, type };
        // this.itemsCollection.doc(id).set(item);
        this.itemsCollection.add(this.item);
    }

    ngOnInit() {

    }

}