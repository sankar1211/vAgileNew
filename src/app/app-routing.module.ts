import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {DetailsComponent} from './details/details.component';
import {ReportsComponent} from './reports/reports.component';

const routes: Routes = [
{
  path:'',
  component:UsersComponent 
},

{
  path:'details/:id',
  component:DetailsComponent 
},
{
  path:'posts',
  component:PostsComponent 
},
{
  path:'reports',
  component:ReportsComponent 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
