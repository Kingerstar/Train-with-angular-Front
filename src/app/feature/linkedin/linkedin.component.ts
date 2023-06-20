import { Component } from '@angular/core';
import { Ennemy } from 'src/app/models/ennemy.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent {

  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)

  isSlain: boolean = false;
  constructor(private ennemyService: DbEnnemyService) { }

  ngOnInit() {
    this.getEnnemyById();
  }

  getEnnemyById(): void {
    this.ennemyService.getById(1).subscribe((e) => {
      this.currentEnnemy = e
      console.log(this.currentEnnemy)
    })
  }

  deleteLinkedin(ennemyId: number) {
    this.ennemyService.delete(ennemyId).subscribe();
    this.isSlain = true;
  }
}




