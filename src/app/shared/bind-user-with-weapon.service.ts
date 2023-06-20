import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BindUserWithWeaponService {

  constructor(private http: HttpClient) { }
  bind(userId: number, weaponId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/bind/userId=${userId}/weaponId=${weaponId}`)
  }
}
