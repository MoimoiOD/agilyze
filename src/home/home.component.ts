import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeFacadeService } from './services/home-facade.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  providers: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    public homeFacadeService: HomeFacadeService
  ) {}
  
  ngOnInit() {
    this.homeFacadeService.identifyCurrentRoute();
  }
  
  toggleMenu() {
    this.homeFacadeService.toggleMenu();
  }

  selectTab(tab: string) {
    this.homeFacadeService.selectTab(tab);
  }

}
