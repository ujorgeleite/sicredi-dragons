import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { EditForm } from './edit.form';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EditForm
  ],
  exports: []
})
export class EditModule { }
