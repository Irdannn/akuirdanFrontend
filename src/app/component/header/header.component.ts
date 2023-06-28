import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  
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
