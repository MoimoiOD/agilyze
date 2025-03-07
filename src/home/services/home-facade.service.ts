import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {

  isMenuOpen = false;
  selectedTab: string = '/home/dashboard';
  currentRoute: string = '';

  constructor(
    private router: Router
  ) {}

  identifyCurrentRoute() {
    this.router.events.subscribe((event: any) => {
        if (event.url) {
          this.selectedTab = event.url;
        }
      });
      this.selectedTab = this.router.url;
      console.log('currentRoute', this.selectedTab);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectTab(tab: string) {
    console.log('tab', tab);
    this.selectedTab = tab;
  }

}