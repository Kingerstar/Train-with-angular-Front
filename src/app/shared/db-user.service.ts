import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DbUserService {

  private readonly _BASE_URL: string = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this._BASE_URL}/all`)
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(`${this._BASE_URL}/add`, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this._BASE_URL}/update/${user.id}`, user);
  }

  delete(userId: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL}/delete/${userId}`);
  }

  getById(userId: number): Observable<User> {
    const url = `${this._BASE_URL}/${userId}`;
    return this.http.get<User>(url);
  }
}

