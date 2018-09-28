import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angulartics2RouterlessModule  } from 'angulartics2/routerlessmodule';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';





import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceItemComponent } from './service-list/service-item/service-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    ServiceItemComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,   
    Angulartics2RouterlessModule.forRoot([Angulartics2GoogleAnalytics]),
    AngularFireModule.initializeApp(environment.firebase, 'BerlinerZweitschluessel'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
