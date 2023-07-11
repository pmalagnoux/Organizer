import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesListComponent } from './files-list/files-list.component';
import {MatTreeModule} from '@angular/material/tree'; 
import {MatIconModule} from '@angular/material/icon';
import { FilePageComponent } from './file-page/file-page.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilesListComponent,
    FilePageComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FilesListComponent
  ]
})
export class FilesModule { }
