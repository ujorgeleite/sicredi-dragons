import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DragonDetailModule } from './components/dragon-detail/dragon-detail.module';
import { DragonCardModule } from './components/dragon-card/dragon-card.module';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from '../app-routing.module';
import { DragonService } from './services/dragon.service';
import { RemoveComponent } from './components/remove/remove.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragonDetailModule,
    DragonCardModule,
    AppRoutingModule,
  ],
  exports: [
    [
      DragonDetailModule,
      DragonCardModule,
    ]
  ],
  providers: [
    ApiService,
    DragonService
  ]
})
export class SharedModule { }
