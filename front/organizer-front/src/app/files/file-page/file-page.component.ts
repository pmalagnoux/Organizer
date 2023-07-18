import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { File } from '../../model/file';
import { Tag } from 'src/app/model/tag';
import { TagService } from 'src/app/service/tag.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilePageComponent implements OnInit, AfterViewInit{

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fileId!: number;
  file$!: Observable<File>;
  tag!: Tag;
  tags$!: Observable<Tag[]>;
  tags!: Tag[];
  filteredTags!: Observable<Tag[]>;
  tagCtrl = new FormControl('');
  isReady = false;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private fileService: FileService, private tagService: TagService, private router: Router){}
  
  ngOnInit(): void {
    this.fileId =+ this.route.snapshot.params['id'];
    this.file$ = this.fileService.getFileById(this.fileId); 
    this.tags$ = this.tagService.getAllTags();

    this.tags$.subscribe( (data) => {
      this.tags = data;
      this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => (tag ? this.tags.filter(a  => a.content.includes(tag)) : this.tags))
      );
      this.isReady = true;
    });
  }

  async ngAfterViewInit() {
    await this.viewIsReady()
    let item = document.querySelector<HTMLElement>(':root');
    if (item != null) {
      item.style.setProperty('--mat-autocomplete-background-color', '#4c4674');
      item.style.setProperty('--mat-option-label-text-color', 'white');
    }
    
    var ite = document.getElementsByClassName("tag-element")
    console.log(ite.length)
    for (let index = 0; index < ite.length; index++) {
      const element = ite[index] as HTMLElement;
      const property = "grayscale(100%) sepia(100%) saturate(505%) hue-rotate(";
      let deg = index/ite.length * 360;
      element.style.setProperty('filter', property + deg + "deg)")
      
    }
  }

  async viewIsReady() {
		while( this.isReady == false){
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
	}


  submitTagsForm(){
    if(this.tag != undefined){
      this.fileService.addTag(this.tag.id, this.fileId).subscribe((data) =>{
        window.location.reload();
      });
    }
  }

  addTag(event: MatChipInputEvent | MatAutocompleteSelectedEvent) {
    if(event instanceof  MatAutocompleteSelectedEvent){
      console.log(event.option.value)
      this.fileService.addTag(event.option.value.id, this.fileId).subscribe((data) =>{
        window.location.reload();
      });
    }
    else{
      var writtenTag = this.tags.find(a => a.content == event.value)

      if (writtenTag != undefined){
        console.log(event.value, writtenTag)
        this.fileService.addTag(writtenTag.id, this.fileId).subscribe((data) =>{
          window.location.reload();
        });
      }
    }
  }

  deleteTag(idTag: number){
    this.fileService.deleteTag(idTag, this.fileId).subscribe((data) =>{
      window.location.reload();
    });
  }
}
function submitTagsForm(): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}

