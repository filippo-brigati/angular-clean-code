import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, NavigationError, Router, Event } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() state: boolean;
  @Output() emitNavState = new EventEmitter<boolean>();

  currentRoute: string;

  constructor(private router: Router) {
    this.state = false;
    this.currentRoute = '';

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;          
      }
      if (event instanceof NavigationError) {
          console.log(event.error);
      }
  });
  }

  closeSidebarMobile(): void {
    this.state = !this.state;
    this.emitNavState.emit(this.state);
  }
}
