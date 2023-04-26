import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-clean-code';

  mobileNavState: boolean;

  constructor() {
    this.mobileNavState = false;
  }

  changeNavMobileState($event: boolean): void {
    this.mobileNavState = $event;
  }
}
