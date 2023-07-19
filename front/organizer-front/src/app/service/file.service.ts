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

  public getFileById(idFile: number): Observable<File> {
    return this.http.get<File>(`${this.baseURL}/${idFile}`);
  }

  public scanFiles() {
    return this.http.post(`${this.baseURL}/scan`, null);
  }

  public addTag(idTag: number, idFile:number) {
    return this.http.post(`${this.baseURL}/${idFile}/addTag/${idTag}`, null);
  }

  public deleteTag(idTag: number, idFile:number) {
    return this.http.delete(`${this.baseURL}/${idFile}/deleteTag/${idTag}`);
  }
}
