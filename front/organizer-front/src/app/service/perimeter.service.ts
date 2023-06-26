import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Perimeter } from '../model/perimeter';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PerimeterService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = apiUrl + "perimeter";
  }


  public getAllPerimeters(){
    return this.http.get<Perimeter[]>(`${this.baseURL}`);
  }

  
  public addPerimeter(perimeter: Perimeter) {
    return this.http.post<Perimeter>(`${this.baseURL}` + `/addPerimeter`, perimeter);
  }

  public getPerimeterById(idPerimeter : number){
    return this.http.get<Perimeter>(`${this.baseURL}` + `/${idPerimeter}`);
  }

  public deletePerimeterById(idPerimeter : number){
    return this.http.delete(`${this.baseURL}` + `/${idPerimeter}`);
  }
}
