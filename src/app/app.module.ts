import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { UserFormComponent } from './ui/user-form/user-form.component';
import { BetweenTwoComponent } from './ui/between-two/between-two.component';
import { ChangeTextBetweenTwoComponent } from './feature/change-text-between-two/change-text-between-two.component';

import { FighterCardComponent } from './feature/fighter-card/fighter-card.component';
import { ArenaComponent } from './ui/arena/arena.component';
import { BeforeBattleComponent } from './page/before-battle/before-battle.component';
import { NgIfComponent } from './feature/ng-if/ng-if.component';
import { LinkedinComponent } from './feature/linkedin/linkedin.component';
import { OutputComponent } from './feature/output/output.component';
import { InputComponent } from './feature/input/input.component';
import { ServiceComponent } from './feature/service/service.component';
import { BindWeaponWithUserComponent } from './feature/bind-weapon-with-user/bind-weapon-with-user.component';
import { InputSolveComponent } from './page/input-solve/input-solve.component';
import { NgForComponent } from './feature/ng-for/ng-for.component';
import { NgclassComponent } from './feature/ngclass/ngclass.component';
import { VictoryComponent } from './feature/victory/victory.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserFormComponent,
    BetweenTwoComponent,
    ChangeTextBetweenTwoComponent,
    FighterCardComponent,
    ArenaComponent,
    BeforeBattleComponent,
    NgIfComponent,
    LinkedinComponent,
    OutputComponent,
    InputComponent,
    ServiceComponent,
    BindWeaponWithUserComponent,
    InputSolveComponent,
    NgForComponent,
    NgclassComponent,
    VictoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
