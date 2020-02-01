import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DragonDetailModule } from './dragon-detail/dragon-detail.module';
import { DragonCardModule } from './dragon-card/dragon-card.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragonDetailModule,
    DragonCardModule,
  ],
  exports: [
    [
      DragonDetailModule,
      DragonCardModule
    ]
  ]
})
export class SharedModule { }
