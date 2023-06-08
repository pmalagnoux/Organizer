import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = apiUrl + "contact";
  }

  public getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseURL}`);
  }

  public addContact(contact: Contact) {
    return this.http.post<Contact>(`${this.baseURL}` + `/addContact`, contact);
  }

  public getContactById(idContact : number){
    return this.http.get<Contact>(`${this.baseURL}` + `/${idContact}`);
  }
}