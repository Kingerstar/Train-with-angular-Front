import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weapon } from '../models/weapon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbWeaponService {

  private readonly _BASE_URL: string = "http://localhost:8080/weapons";

  constructor(private http: HttpClient) { }
  getAll(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(`${this._BASE_URL}/all`)

  }

  add(weapon: Weapon): Observable<Weapon> {
    return this.http.post<Weapon>(`${this._BASE_URL}/add`, weapon);
  }
  update(weapon: Weapon): Observable<Weapon> {
    return this.http.put<Weapon>(`${this._BASE_URL}/update/${weapon.id}`, weapon);
  }
}
