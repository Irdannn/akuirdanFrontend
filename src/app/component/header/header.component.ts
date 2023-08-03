import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isActive(link: string): boolean {
    return this.router.url.includes(link);
  }
  
  public users:any = [];
  public role!:string;

  public fullName:string = "";
  constructor(
    private router: Router
    ) { }


  ngOnInit() {
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
