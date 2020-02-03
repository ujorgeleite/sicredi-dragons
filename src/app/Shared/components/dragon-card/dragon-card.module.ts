import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DragonCardComponent } from './dragon-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RemoveModule } from '../remove/remove.module';




@NgModule({
  declarations: [
    DragonCardComponent
  ],
  imports: [
    RemoveModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  exports: [
    DragonCardComponent
  ]
})
export class DragonCardModule { }
