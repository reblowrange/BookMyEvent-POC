import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAdminPath = false;
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url.includes('admin')) {
          this.isAdminPath = true;
        } else {
          this.isAdminPath = false;
        }
      }

    });
  }
}
