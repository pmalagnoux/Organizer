import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerimetersListComponent } from './perimeters-list/perimeters-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPerimeterFormComponent } from './new-perimeter-form/new-perimeter-form.component';
import { PerimeterFormComponent } from './perimeter-form/perimeter-form.component';
import { PerimeterPageComponent } from './perimeter-page/perimeter-page.component';



@NgModule({
  declarations: [
    PerimetersListComponent,
    NewPerimeterFormComponent,
    PerimeterFormComponent,
    PerimeterPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PerimetersListComponent,
    NewPerimeterFormComponent,
    PerimeterFormComponent,
    PerimeterPageComponent
    ]
})
export class PerimetersModule { }
