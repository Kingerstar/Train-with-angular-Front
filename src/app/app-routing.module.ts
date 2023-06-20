import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { BetweenTwoComponent } from './ui/between-two/between-two.component';
import { ArenaComponent } from './ui/arena/arena.component';
import { BeforeBattleComponent } from './page/before-battle/before-battle.component';
import { NgIf } from '@angular/common';
import { NgIfComponent } from './feature/ng-if/ng-if.component';
import { LinkedinComponent } from './feature/linkedin/linkedin.component';
import { ServiceComponent } from './feature/service/service.component';
import { OutputComponent } from './feature/output/output.component';
import { InputComponent } from './feature/input/input.component';
import { InputSolveComponent } from './page/input-solve/input-solve.component';
import { NgForComponent } from './feature/ng-for/ng-for.component';
import { NgclassComponent } from './feature/ngclass/ngclass.component';
import { VictoryComponent } from './feature/victory/victory.component';
import { ErrorpageComponent } from './feature/errorpage/errorpage.component';


const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "stop", component: BetweenTwoComponent },
  { path: "arena", component: ArenaComponent },
  { path: "arena/beforebattle", component: BeforeBattleComponent },
  { path: "arena/ngif", component: NgIfComponent },
  { path: "arena/linkedin", component: LinkedinComponent },
  { path: "arena/service", component: ServiceComponent },
  { path: "arena/output", redirectTo: "arena/input" },
  { path: "arena/input", component: InputComponent },
  { path: "solve", component: InputSolveComponent },
  { path: "arena/ngfor", component: NgForComponent },
  { path: "arena/ngstyle", component: NgclassComponent },
  { path: "victory", component: VictoryComponent },
  { path: "**", component: ErrorpageComponent, pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
