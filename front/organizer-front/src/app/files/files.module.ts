import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesListComponent } from './files-list/files-list.component';
import {MatTreeModule} from '@angular/material/tree'; 
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    FilesListComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule
  ],
  exports: [
    FilesListComponent
  ]
})
export class FilesModule { }
