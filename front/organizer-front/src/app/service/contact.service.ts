import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl: string;

  constructor(private http: HttpClient) {
    this.contactsUrl = 'http://localhost:8081/organizer/contacts';
  }

  public getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.contactsUrl}/getAllContacts`);
  }

  // public addContact(contact: Contact) {
  //   return this.http.post<Contact>(this.contactsUrl, contact);
  // }
}