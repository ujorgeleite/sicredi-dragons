import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Components/List/list.component';
import { LoginModule } from './Components/login/login.module';
import { SharedModule } from './Shared/shared.module';
import { AuthGuardService } from './Shared/services/auth-guard.service';
import { NotFoundModule } from './Components/not-found/not-found.module';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    NotFoundModule,
    LoginModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
