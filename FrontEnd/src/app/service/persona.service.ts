import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  persURL = "http://localhost:8080/personas/";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.persURL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.persURL + `detail/${id}`);
  }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.persURL + `update/${id}`, Persona);
  }
}
