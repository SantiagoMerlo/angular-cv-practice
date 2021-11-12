import { Component, OnInit } from '@angular/core';
import { GlobalText } from 'src/assets/translate';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  public name = GlobalText.PERSONAL.NAME;
  public position = GlobalText.PERSONAL.POSITION;
  public city = GlobalText.PERSONAL.CITY;
  public description = GlobalText.PERSONAL.DESCRIPTION;
  
  isMobile = window.innerWidth < 600;

  ngOnInit() {
    window.addEventListener("resize", () => this.isMobile = window.innerWidth < 600)
  }

}
