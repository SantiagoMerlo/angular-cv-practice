import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(e:any) {
    console.log(e.target.name)
  }

}
