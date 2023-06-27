import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Perimeter } from '../model/perimeter';


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
    return this.http.post<Contact>(`${this.baseURL}/addContact`, contact);
  }

  public updateContact(contact: Contact, idContact: number){
    return this.http.post(`${this.baseURL}/${idContact}`, contact);
  }

  public getContactById(idContact : number){
    return this.http.get<Contact>(`${this.baseURL}/${idContact}`);
  }

  public deleteContactById(idContact : number){
    return this.http.delete(`${this.baseURL}/${idContact}`);
  }

  public addPerimeter(idPerimeter: number, idContact: number){
    return this.http.post(`${this.baseURL}/${idContact}/addPerimeter/${idPerimeter}`, null);
  }

  public deletePerimeter(idPerimeter: number, idContact: number){
    return this.http.delete(`${this.baseURL}/${idContact}/deletePerimeter/${idPerimeter}`);
  }

  
}