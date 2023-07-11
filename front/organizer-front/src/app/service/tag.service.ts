import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../model/tag';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = apiUrl + "tag";
  }

  public getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.baseURL}`);
  }

  public deleteTagById(idTag: number){
    return this.http.delete(`${this.baseURL}/${idTag}`)
  }

  public updateTagById(tag: Tag){
    return this.http.post<Tag>(`${this.baseURL}/${tag.id}`, tag)
  }

  public addTag(tag: Tag){
    return this.http.post<Tag>(`${this.baseURL}/addTag`, tag)
  }
}
