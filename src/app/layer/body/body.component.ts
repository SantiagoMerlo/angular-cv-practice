import { Component, OnInit } from '@angular/core';
import { GlobalText } from 'src/assets/translate';
import { CardType } from '../../components/cards/cards.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  public skills_title: string = GlobalText.SKILLS.TITLE
  public skills_items: string[] = GlobalText.SKILLS.ITEMS

  public tecnologies_title: string = GlobalText.TECNOLOGIES.TITLE
  public tecnologies_items: string[] = GlobalText.TECNOLOGIES.ITEMS


  public work_title: string = GlobalText.WORK.TITLE
  public work_items: CardType[] | undefined = GlobalText.WORK.ITEMS
  public work_img: string = GlobalText.WORK.IMG

  public studies_title: string = GlobalText.STUDIES.TITLE
  public studies_items: CardType[] = GlobalText.STUDIES.ITEMS
  public studies_img: string = GlobalText.STUDIES.IMG

  public game_title: string = GlobalText.GAME.TITLE
  public game_items: CardType[] = GlobalText.GAME.ITEMS
  public game_img: string = GlobalText.GAME.IMG

  isMobile = false;

  ngOnInit() {
    window.addEventListener("resize", () => this.isMobile = window.innerWidth < 900)
  }

}
