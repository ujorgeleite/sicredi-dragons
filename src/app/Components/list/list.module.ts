import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  providers: [
  ]
})
export class ListModule { }
