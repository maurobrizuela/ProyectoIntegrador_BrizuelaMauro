import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillURL= 'http://localhost:8080/skill/'
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillURL + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillURL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.skillURL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillURL + `update/${id}`, skill);
  }

  public delete (id: number): Observable<any>{
    return this.httpClient.delete(this.skillURL + `delete/${id}`);
  }
}