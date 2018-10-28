import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
<<<<<<< HEAD
import { DbcomComponent } from './dbcom/dbcom.component';
=======
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '#home', component: HomeComponent },
  {path: '#forum', component: ForumComponent},

  {path: '**', component: HomeComponent}
]
>>>>>>> 4206ceaf71e4a83c1ab42fc85afb70c4f4b0c7f9

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
<<<<<<< HEAD
    DbcomComponent
=======
    ForumComponent,
    HomeComponent
>>>>>>> 4206ceaf71e4a83c1ab42fc85afb70c4f4b0c7f9
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
