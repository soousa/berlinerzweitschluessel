import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angulartics2RouterlessModule  } from 'angulartics2/routerlessmodule';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';




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
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
