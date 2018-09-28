import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {   
  // Title = 'BerlinerZweitschluessel';
  // constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {};

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
  this.items = db.collection('items').valueChanges();
  }
}