import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ennemy } from '../models/ennemy.model';
import { Weapon } from '../models/weapon.model';

@Injectable({
  providedIn: 'root'
})
export class DbEnnemyService {
  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)
  private readonly _BASE_URL: string = "http://localhost:8080/ennemies";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Ennemy[]> {
    return this.http.get<Ennemy[]>(this._BASE_URL + "/all")
  }

  getById(ennemyId: number): Observable<Ennemy> {
    const url = `${this._BASE_URL}/${ennemyId}`;
    return this.http.get<Ennemy>(url);
  }
  onNewEnnemy(newEnnemy: Ennemy): void {
    this.currentEnnemy = newEnnemy;
  }
  getCurrentEnnemy(): Ennemy {
    return this.currentEnnemy;
  }
  delete(ennemyId: number): Observable<void> {
    return this.http.delete<
      void>(`${this._BASE_URL}/delete/${ennemyId}`);
  }


}
