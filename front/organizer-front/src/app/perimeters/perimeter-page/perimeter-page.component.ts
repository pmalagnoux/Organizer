import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { Perimeter } from 'src/app/model/perimeter';

import { ContactService } from 'src/app/service/contact.service';
import { PerimeterService } from 'src/app/service/perimeter.service';

@Component({
  selector: 'app-perimeter-page',
  templateUrl: './perimeter-page.component.html',
  styleUrls: ['./perimeter-page.component.scss']
})
export class PerimeterPageComponent implements OnInit{

  perimeterId !: number
  perimeter$!: Observable<Perimeter>;
  contacts$!: Observable<Contact[]>;
  contact!: Contact;
  constructor(private route: ActivatedRoute, private contactService : ContactService, private perimeterService: PerimeterService, private router : Router){}

  ngOnInit(): void {
      this.perimeterId = +this.route.snapshot.params['id'];
      this.perimeter$ = this.perimeterService.getPerimeterById(this.perimeterId);
      this.contacts$ = this.contactService.getAllContacts();
      
     
  }

  submitContactForm(){
    if(this.contact != undefined){
      this.perimeterService.addContact(this.perimeterId, this.contact.id).subscribe((data) =>{
        window.location.reload();
      });
    }
  }   

  deleteContact(idContact: number){
    this.perimeterService.deleteContact(this.perimeterId, idContact).subscribe((data) =>{
      window.location.reload();
    });
  }

  toContact(contact: Contact){
    this.router.navigateByUrl(`/contact/${contact.id}` )
  }
}
