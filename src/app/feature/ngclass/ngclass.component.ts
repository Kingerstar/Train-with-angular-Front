import { Component } from '@angular/core';
import { Ennemy } from 'src/app/models/ennemy.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent {

  isSlain: boolean = false;
  disappear: boolean = false;
  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)

  constructor(private ennemyService: DbEnnemyService) { }

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.ennemyService.getById(7).subscribe((e) => {
      this.currentEnnemy = e;
    })
  }

  deleteNgStyle(ennemyId: number): void {
    this.isSlain = true;
    setTimeout(() => {
      this.disappear = true;
      this.ennemyService.delete(ennemyId).subscribe();

    }, 4000);
  }

}
