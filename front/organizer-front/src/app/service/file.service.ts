import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { File } from '../model/file';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = apiUrl + "file";
   }
  
   public getAllFiles(): Observable<File[]> {
    return this.http.get<File[]>(`${this.baseURL}`);
  }

  public scanFiles(): void {
    this.http.post(`${this.baseURL}/scan`, null);
  }

}
