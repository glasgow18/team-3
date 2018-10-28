import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export class Item { name: string; flavour: string; type: string }

@Component({
    selector: 'app-forum',
    templateUrl: './forum.component.html',
    styleUrls: ['./forum.component.css']
})
export class ForumComponent {
    private itemsCollection: AngularFirestoreCollection<Item>;
    public items: Observable<Item[]>;

    constructor(private afs: AngularFirestore) {
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.valueChanges(); 
    }
}