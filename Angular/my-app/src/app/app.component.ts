import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'app-root',
    template: `
        <ul>
            <li *ngFor="let item of items | async">
                <pre>{{ item | json }}</pre>
            </li>
        </ul>
    `
})
export class AppComponent {
    public items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('/items').valueChanges();
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
