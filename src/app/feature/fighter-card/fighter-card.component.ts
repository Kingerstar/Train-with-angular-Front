import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ennemy } from 'src/app/models/ennemy.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';
import { UtilsService } from 'src/app/shared/utils.service';

@Component({
  selector: 'app-fighter-card',
  templateUrl: './fighter-card.component.html',
  styleUrls: ['./fighter-card.component.scss']
})
export class FighterCardComponent {
  ennemyList: Ennemy[] = [];

  constructor(private ennemyService: DbEnnemyService, private utils: UtilsService, private router: Router) { }
  link: string = ""
  linkIsGenerate: boolean = false;

  ngOnInit(
  ) {
    this.getAllEnnemies();
  }

  getAllEnnemies(): void {
    this.ennemyService.getAll().subscribe((ennemiesGotFromBack) => {
      this.ennemyList = ennemiesGotFromBack
    })
  }
  generateLink(ennemy: Ennemy): string {
    return '/arena/' + this.utils.convertNameAndIdToUrl(ennemy.name);
  }
  goToFight(ennemy: Ennemy): void {
    this.ennemyService.onNewEnnemy(ennemy)
    this.router.navigate(["/arena/beforebattle"])
  }

}

