import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DbUserService } from 'src/app/shared/db-user.service';
import { ReplayServiceService } from 'src/app/shared/replay-service.service';

@Component({
  selector: 'app-victory',
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.scss']
})
export class VictoryComponent {

  currentUser: User = new User("", "", [], [], 1)

  constructor(private userService: DbUserService, private replayService: ReplayServiceService) {
  }
  ngOnInit() {
    this.getUserById();

  }
  getUserById() {
    this.userService.getById(1).subscribe((e) => {
      this.currentUser = e;
    })
  }
  replay(): void {
    this.replayService.sendJsonToBack();

  }

}
