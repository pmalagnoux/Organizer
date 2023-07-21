import { ENTER, COMMA, S } from '@angular/cdk/keycodes';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Tag } from '../model/tag';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FileService } from '../service/file.service';
import { TagService } from '../service/tag.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit, AfterViewInit{

  type!: string

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tags$!: Observable<Tag[]>;
  tags!: Tag[];
  filteredTags!: Observable<Tag[]>;
  selectedTags!: Tag[];;
  tag!: Tag;
  tagCtrl = new FormControl('');
  fileId!: number
  isReady = false;
constructor(private fileService : FileService, private tagService : TagService){}


  ngOnInit(): void {
    this.selectedTags = [];
    this.type = "";    
    this.tags$ = this.tagService.getAllTags();
    this.tags$.subscribe( (data) => {
      this.tags = data;
      this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => (tag ? this.tags.filter(a  => a.content.toLowerCase().includes(tag.toLowerCase())) : this.tags))
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
      item.style.setProperty('--mat-option-label-text-color', 'white');
      item.style.setProperty('--mat-select-panel-background-color', '#4c4674');
      item.style.setProperty('--mat-option-selected-state-label-text-color', 'wheat');
      
    }
    
    var ite = document.getElementsByClassName("tag-element")
  
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

  addTag(event: MatChipInputEvent | MatAutocompleteSelectedEvent) {
    if(event instanceof  MatAutocompleteSelectedEvent){
      //Si on choisi parmis les choix
      this.selectedTags.push(event.option.value)
    }
    else{
      // Si on tape à la main
      var writtenTag = this.tags.find(a => a.content.toLowerCase() == event.value.toLowerCase())
      console.log("aaaa")
      if (writtenTag != undefined){
        //Si on a trouvé le tag
        this.selectedTags.push(writtenTag)
      }
    }
  } 

  deleteTag(idTag : number){
    
  }

  typeFilter(){
    console.log(this.type)
  }
}
