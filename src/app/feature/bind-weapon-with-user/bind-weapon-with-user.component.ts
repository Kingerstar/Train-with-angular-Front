import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Weapon } from 'src/app/models/weapon.model';
import { BindUserWithWeaponService } from 'src/app/shared/bind-user-with-weapon.service';
import { DbUserService } from 'src/app/shared/db-user.service';
import { DbWeaponService } from 'src/app/shared/db-weapon.service';

@Component({
  selector: 'app-bind-weapon-with-user',
  templateUrl: './bind-weapon-with-user.component.html',
  styleUrls: ['./bind-weapon-with-user.component.scss']
})
export class BindWeaponWithUserComponent {

  currentUser: User = new User("", "", [], [], 1)
  weaponList: Weapon[] = []
  weapon!: Weapon;

  constructor(private userService: DbUserService, private bindService: BindUserWithWeaponService, private weaponService: DbWeaponService) {
  }

  ngOnInit() {
    this.getUserById();
    this.getWeapon();
  }

  getWeapon(): void {
    this.weaponService.getAll().subscribe((weaponsFromBack: Weapon[]) => {
      this.weaponList = weaponsFromBack;
    })
  }

  getUserById(): void {
    this.userService.getById(1).subscribe((e) => {
      this.currentUser = e;
    })
  }

  bindUserAndWeapon(weaponId: number): void {
    this.bindService.bind(this.currentUser.id as number, weaponId).subscribe((userWithNewWeapons) => {
      window.location.reload();
    })
  }
}