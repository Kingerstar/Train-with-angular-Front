import { Component } from '@angular/core';
import { Ennemy } from 'src/app/models/ennemy.model';
import { User } from 'src/app/models/user.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';
import { DbUserService } from 'src/app/shared/db-user.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
  currentEnnemy: Ennemy = new Ennemy("", new Weapon("", false, false, [], 0), [], "", 0)
  isSlain: boolean = false;
  currentUser!: User

  constructor(private ennemyService: DbEnnemyService, private userService: DbUserService) { }

  ngOnInit() {
    this.getEnnemyById();
    this.getUserById();
  }

  getEnnemyById(): void {
    this.ennemyService.getById(3).subscribe((e) => {
      this.currentEnnemy = e;
    })
  }
  deleteNgFor(ennemyId: number) {
    setTimeout(() => {
      this.ennemyService.delete(ennemyId).subscribe((e) => {
      })
      this.isSlain = true;

    }, 500);
  }
  getUserById(): void {
    this.userService.getById(1).subscribe((e) => {
      this.currentUser = e;
    })
  }
}
