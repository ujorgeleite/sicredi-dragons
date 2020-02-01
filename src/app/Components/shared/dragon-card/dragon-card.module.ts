import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DragonCardComponent } from './dragon-card.component';



@NgModule({
  declarations: [
    DragonCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    DragonCardComponent
  ]
})
export class DragonCardModule { }
