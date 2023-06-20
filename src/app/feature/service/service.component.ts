import { Component } from '@angular/core';
import { Ennemy } from 'src/app/models/ennemy.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  isSlain: boolean = false;

  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)

  constructor(private ennemyService: DbEnnemyService) { }

  ngOnInit() { this.getById(); }

  getById() {
    this.ennemyService.getById(6).subscribe((e) => {
      this.currentEnnemy = e;
    })
  }


}
