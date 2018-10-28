import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
 
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Item { name: string; flavour: string; }

@Component({
    selector: 'app-forum',
    templateUrl: './forumPL.component.html',
    styleUrls: ['./forumPL.component.css']
})
export class ForumPLComponent {
    title = "";
    constructor(route: ActivatedRoute) {
        this.title = route.data["_value"].title;
      }
}