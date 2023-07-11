import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { File } from '../../model/file';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.scss']
})
export class FilePageComponent implements OnInit{

  fileId!: number;
  file$!: Observable<File>;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private fileService: FileService, private router: Router){}
  
  ngOnInit(): void {
    this.fileId =+ this.route.snapshot.params['id'];
    this.file$ = this.fileService.getFileById(this.fileId); 

  }
  
}
