import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonDetailComponent } from './dragon-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    DragonDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    DragonDetailComponent
  ]
})
export class DragonDetailModule { }
