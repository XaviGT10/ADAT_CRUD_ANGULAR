import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddF1Component } from './components/add-f1/add-f1.component';
import { DetailF1Component } from './components/detail-f1/detail-f1.component';
import { ListF1Component } from './components/list-f1/list-f1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeF1Component } from './components/home-f1/home-f1.component';



@NgModule({
  declarations: [
    AppComponent,
    AddF1Component,
    DetailF1Component,
    ListF1Component,
    HomeF1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
