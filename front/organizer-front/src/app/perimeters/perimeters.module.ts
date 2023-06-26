import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerimetersListComponent } from './perimeters-list/perimeters-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerimetersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PerimetersListComponent
    ]
})
export class PerimetersModule { }
