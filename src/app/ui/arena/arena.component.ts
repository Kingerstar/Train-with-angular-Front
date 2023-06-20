import { Component } from '@angular/core';
import { Ennemy } from 'src/app/models/ennemy.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent {

  ennemyList: Ennemy[] = []

  constructor(private ennemyService: DbEnnemyService) {
  }


  getAllEnnemies(): void {
    this.ennemyService.getAll().subscribe((e) => {
      this.ennemyList = e;
    })
  }
}
