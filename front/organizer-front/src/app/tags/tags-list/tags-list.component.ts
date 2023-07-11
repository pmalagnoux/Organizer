import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Tag } from 'src/app/model/tag';
import { TagService } from 'src/app/service/tag.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss'], 
})

export class TagsListComponent implements OnInit{


  @ViewChild('modalForm') templateTag !: TemplateRef<any>;

  tagsList$!: Observable<Tag[]>;
  tagForm!: FormGroup;
  isModalOpen = false as boolean;

  constructor(private tagService : TagService, private router: Router, private formBuilder: FormBuilder,  private modalService: NgbModal){}

  ngOnInit(){
    this.tagsList$ = this.tagService.getAllTags().pipe(tap(
      result => result.sort((x, y) => x.content.localeCompare(y.content, 'fr', {ignorePunctuation: true}))
    ));
  }

  ngOnDestroy(){
    this.closeModal();
  }


  validateForm(){

    if (this.tagForm != undefined && this.tagForm.valid){

      if(this.tagForm.value.id == null){
        let tag = new Tag();
        tag.content = this.tagForm.value.tag;
        this.tagService.addTag(tag).subscribe((data)=> {
          window.location.reload();
        });
      }

      else {
        let tag = new Tag();
        tag.id = this.tagForm.value.id;
        tag.content = this.tagForm.value.tag;
        this.tagService.updateTagById(tag).subscribe((data) => {
          window.location.reload();
        });
      }
    }
  
  }

  deleteTag(idTag: number, event: Event){
    if(!this.isModalOpen){
      event.stopImmediatePropagation();
      this.tagService.deleteTagById(idTag).subscribe((data) => {
        window.location.reload();
      });
    }

  }

  openModifyModal(tag: Tag, event: Event){
    if(!this.isModalOpen){
      this.isModalOpen = true;
      event.stopImmediatePropagation();
      this.tagForm = this.formBuilder.group({
        id: [tag.id],
        tag: [tag.content, Validators.required],
      })

      this.modalService.open(this.templateTag)
    }
  }

  openAddModal(event: Event){
    if(!this.isModalOpen){
      this.isModalOpen = true;
      event.stopImmediatePropagation();
      this.tagForm = this.formBuilder.group({
        id: [null],
        tag: [null, Validators.required],
      })

      this.modalService.open(this.templateTag)
    }
  }

  closeModal(){
    this.isModalOpen = false;
    if(this.modalService.hasOpenModals()){
      this.modalService.dismissAll();
    }
  }
}
