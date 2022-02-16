import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddF1Component } from './components/add-f1/add-f1.component';
import { DetailF1Component } from './components/detail-f1/detail-f1.component';
import { ListF1Component } from './components/list-f1/list-f1.component';

@NgModule({
  declarations: [
    AppComponent,
    AddF1Component,
    DetailF1Component,
    ListF1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
