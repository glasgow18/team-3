import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DbcomComponent } from './dbcom/dbcom.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { ForumPLComponent } from './forumPL/forumPL.component';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { ProbeComponent } from './probe/probe.component';
import { DbdelComponent } from './dbdel/dbdel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'forum', component: ForumComponent},
  {path: 'forum/aboutCancer', component: ForumPLComponent, data: {title : 'About Cancer'}},
  {path: 'forum/treatment', component: ForumPLComponent, data: {title : 'Treatment'}},
  {path: 'forum/support', component: ForumPLComponent, data: {title : 'Support'}},
  {path: 'forum/advice', component: ForumPLComponent, data: {title : 'Advice'}},
  {path: 'forum/hospitals', component: ForumPLComponent, data: {title : 'Hospitals'}},
  {path: 'forum/casual', component: ForumPLComponent, data: {title : 'Casual'}},
  {path: 'profile', component: ProfileComponent},

  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DbcomComponent,
    ForumComponent,
    ForumPLComponent,
    HomeComponent,
    ForumPostComponent,
<<<<<<< HEAD
    DashboardComponent,
    ProfileComponent
=======
    ProbeComponent,
    DbdelComponent,
    DashboardComponent
>>>>>>> 778eb0f04c671afb2fa84a91cb16580a3001ec91
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
