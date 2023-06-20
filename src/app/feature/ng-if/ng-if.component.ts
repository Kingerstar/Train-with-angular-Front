import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Ennemy } from 'src/app/models/ennemy.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {

  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)
  teleport: boolean = false;
  isSlain: boolean = false;

  constructor(private ennemyService: DbEnnemyService) {
  }
  ngOnInit() {
    this.getEnnemyById();
    this.infiniteTeleport();
  }
  getEnnemyById(): void {
    this.ennemyService.getById(2).subscribe((e) => {
      this.currentEnnemy = e;
      console.log(this.currentEnnemy)
    })
  }

  infiniteTeleport(count: number = 0) {
    setTimeout(() => {
      this.teleport = !this.teleport;
      count++;
      if (count < 200) {
        this.infiniteTeleport(count);
      }
    }, 1000);
  }
  deleteNgIf(ennemyId: number) {
    this.ennemyService.delete(ennemyId).subscribe((e) => {
    })
  }
}

