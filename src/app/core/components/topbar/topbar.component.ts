import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Output() emitNavState = new EventEmitter<boolean>();
  state: boolean;
  navState: boolean;

  constructor() {
    this.state = false;
    this.navState = false;
  }

  openSmallMenu(): void {
    this.state = !this.state;
  }

  openSidebar() {
    this.emitNavState.emit(!this.navState);
  }
}
