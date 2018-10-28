import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-probe',
  templateUrl: './probe.component.html',
  styleUrls: ['./probe.component.css']
})
export class ProbeComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Object>;
  public items: Observable<Object[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Object>('forums');
    this.items = this.itemsCollection.valueChanges();
    console.log(this.items);
  }


  ngOnInit() {
  }

}
