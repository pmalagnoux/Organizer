import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contactList$!: Observable<Contact[]>;



  constructor(private contactService: ContactService, private router: Router){}

  ngOnInit(){
    this.contactList$ = this.contactService.getAllContacts().pipe(tap(
      result => result.sort((x, y) => x.firstName.localeCompare(y.firstName, 'fr', {ignorePunctuation: true}))
    ));
  }

  toAddContact(){
    this.router.navigateByUrl(`/addcontact`);
  }

  toContact(idContact: number){
    this.router.navigateByUrl(`/contact/${idContact}`);
  }

  deleteContact(idContact : number, event: Event){
    event.stopImmediatePropagation();
    this.contactService.deleteContactById(idContact).subscribe((data) => {
      window.location.reload();
    });
  }

  toUpdateContact(idContact: number, event: Event){
    event.stopImmediatePropagation();
    this.router.navigateByUrl(`/updatecontact/${idContact}`);
  }

  

}
