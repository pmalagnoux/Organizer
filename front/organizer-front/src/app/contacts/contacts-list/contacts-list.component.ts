import { Component, OnInit } from '@angular/core';
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



  constructor(private contactService: ContactService){}


  ngOnInit(){
    this.contactList$ = this.contactService.getAllContacts().pipe(tap(
      result => result.sort((x, y) => x.firstNameContact.localeCompare(y.firstNameContact, 'fr', {ignorePunctuation: true}))
    ));
    //TODO : Rajouter les périmètres aussi en bout de ligne
  }
}
