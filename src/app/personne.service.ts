

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Personne } from 'app/models/personne';
import { Gouvernerat } from 'app/models/gouvernerat';

import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8088/Personnes'; 


  getPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.baseUrl}/getpersonnes`);
  }

  getPersonneById(id: any): Observable<Personne> {
    return this.http.get<Personne>(`${this.baseUrl}/getbyid/${id}`)
  }

  deletePersonne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletebyid/${id}`);
  }


  addPersonneAndAssociateGouvernerat(data: Personne, gouverneratId: number): Observable<Personne> {
    const url = `${this.baseUrl}/addpersonne/${gouverneratId}`;
    return this.http.post<Personne>(url, data);
  }
  
  updatePersonneWithAssociations(
    data: Personne,
    id: number,
    idgouv: number,
    
  ): Observable<Personne> {
    // Construct the URL without joining idBloc
   // const url = `${this.baseUrl}/updatePersonne/${id}/${idgouv}`;
   const url = `${this.baseUrl}/updatePersonne/${id}`;
    return this.http.put<Personne>(url, data);
  }

  getGouv(): Observable<Gouvernerat[]> {
    return this.http.get<Gouvernerat[]>(`${this.baseUrl}/getallgouv`);
  }
}

  