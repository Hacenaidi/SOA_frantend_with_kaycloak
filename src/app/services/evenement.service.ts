import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  apiURL: string = 'http://localhost:8080/evenements/api/all';

  evenements!: Evenement[]; // an array of evenements
  
  constructor(private http: HttpClient) { }

  listeEvenement(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiURL);
  }
}
