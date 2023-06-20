import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplayServiceService {

  url: string = "localhost:8080/ennemies/add/all";
  jsonData = [
    {
      "id": 1,
      "name": "Linkedin",
      "imgUrl": "https://thumbs.dreamstime.com/b/%C3%A9ditorial-du-logo-linkedin-d-illustration-sur-le-fond-blanc-la-banni%C3%A8re-blanche-jpeg-de-vecteur-t%C3%A9l%C3%A9chargement-eps-208329501.jpg",
      "defeatedBy": [],
      "weaponHolded": {
        "id": 1,
        "name": "Responsable recrutement énervé",
        "isBlunt": true,
        "isSharp": null
      }
    },

  ]

  constructor(private httpClient: HttpClient) { }

  sendJsonToBack() {
    this.httpClient.post(this.url, this.jsonData).subscribe()
  }
}
