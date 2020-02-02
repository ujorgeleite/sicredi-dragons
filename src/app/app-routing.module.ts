import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Components/List/list.component';
import { DragonDetailComponent } from './Shared/components/dragon-detail/dragon-detail.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuardService } from './Shared/services/auth-guard.service';
import { NotFoundComponent } from './Components/not-found/not-found.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'list', component: ListComponent, canActivate: [AuthGuardService] },
  { path: 'detail/:id', component: DragonDetailComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
