import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ennemy } from 'src/app/models/ennemy.model';
import { DbEnnemyService } from 'src/app/shared/db-ennemy.service';

@Component({
  selector: 'app-change-text-between-two',
  templateUrl: './change-text-between-two.component.html',
  styleUrls: ['./change-text-between-two.component.scss']
})
export class ChangeTextBetweenTwoComponent {
  @Input()
  title: String = "";
  @Input()
  submitButtonLabel: String = "";
  @Input()
  label: boolean = false;
  @Input()
  sentence: string = "";
  @Input()
  redirect: string = "";
  @Input()
  fightWith: string = "";
  @Input() currentEnnemy!: Ennemy;
  @Input() deleteFamily!: string;

  @Output() generateLinkClicked: EventEmitter<Ennemy> = new EventEmitter<Ennemy>();
  @Output() deleteFamilyClicked: EventEmitter<void> = new EventEmitter<void>();


  constructor(private router: Router, private ennemyService: DbEnnemyService) { }

  redirectButton() {
    this.router.navigate([this.redirect])
  }

  onGenerateLinkClick(ennemy: any): void {
    this.generateLinkClicked.emit(ennemy);
  }
  submit(): void {
    this.deleteFamilyClicked.emit();
  }
  delete(ennemyId: number): void {
    this.ennemyService.delete(ennemyId).subscribe();
  }
}