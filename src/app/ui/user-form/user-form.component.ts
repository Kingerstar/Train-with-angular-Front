import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Weapon } from 'src/app/models/weapon.model';
import { DbUserService } from 'src/app/shared/db-user.service';
import { DbWeaponService } from 'src/app/shared/db-weapon.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user: User = new User("", "", [], [], 0)
  weapon: Weapon = new Weapon("", false, false, [], 0)
  firstFieldValidate: boolean = false;
  userIsDefined: boolean = false;
  lastFormIsFilled: boolean = false;

  constructor(private userService: DbUserService, private weaponService: DbWeaponService, private router: Router) {
  }

  ngOnInit() { }

  onSubmit(): void {
    this.userService.add(this.user).subscribe((userCreated: User) => {
      console.log(userCreated)
    });
    this.weaponService.add(this.weapon).subscribe((weaponCreated: Weapon) => {
      console.log(weaponCreated)
    })
    this.router.navigate(['/stop']);
  }
}
