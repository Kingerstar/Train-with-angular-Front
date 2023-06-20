import { Component } from '@angular/core';
import { Ennemy } from 'src/app/models/ennemy.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)
  currentHelper: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)
  isDadAlive: boolean = true;
  isKidAlive: boolean = true;

  constructor(private ennemyService: DbEnnemyService) {
  }
  ngOnInit() {
    this.getEnnemyById()
    console.log(this.currentEnnemy);
  }

  getEnnemyById(): void {
    this.ennemyService.getById(5).subscribe((e) => {
      this.currentEnnemy = e;
    })
    this.ennemyService.getById(4).subscribe((h) => {
      this.currentHelper = h;
    })
  }

}
