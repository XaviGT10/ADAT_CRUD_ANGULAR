import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailF1Component } from './components/detail-f1/detail-f1.component';
import { AddF1Component } from './components/add-f1/add-f1.component';
import { ListF1Component } from './components/list-f1/list-f1.component';
import { HomeF1Component } from './components/home-f1/home-f1.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home-f1' },
  {path: 'list-f1', component: ListF1Component},
  {path: 'add-f1', component: AddF1Component},
  {path: 'edit-f1/:_id', component: DetailF1Component},
  {path: 'home-f1', component: HomeF1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
