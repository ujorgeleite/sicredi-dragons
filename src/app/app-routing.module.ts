import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Components/list/list.component';
import { LoginComponent } from './Components/login/login/login.component';
import { DragonDetailComponent } from './shared/components/dragon-detail/dragon-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DragonDetailComponent },
  { path: '*', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
