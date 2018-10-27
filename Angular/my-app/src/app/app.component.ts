import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Item { name: string; flavour: string; }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Team3App";
    private itemsCollection: AngularFirestoreCollection<Item>;
    public items: Observable<Item[]>;

    constructor(private afs: AngularFirestore) {
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.valueChanges(); 
    }
}


/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team3App';
}
*/
