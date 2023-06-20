import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ennemy } from 'src/app/models/ennemy.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';
import { UtilsService } from 'src/app/shared/utils.service';

@Component({
  selector: 'app-before-battle',
  templateUrl: './before-battle.component.html',
  styleUrls: ['./before-battle.component.scss']
})
export class BeforeBattleComponent {

  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0);
  link: string = "";

  constructor(private route: Router, private ennemyService: DbEnnemyService, private utils: UtilsService) { }

  ngOnInit() {
    this.currentEnnemy = this.ennemyService.getCurrentEnnemy();
  }

  generateLink(ennemy: Ennemy): void {
    this.link = '/arena/' + this.utils.convertNameAndIdToUrl(ennemy.name);
    this.route.navigate([this.link]);
  }
}

