import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Checkpoint3FrontEnd';
  isNavigating: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.isNavigating = event instanceof NavigationStart;
    });
  }
}
