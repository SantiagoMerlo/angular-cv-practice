import { Component, Input } from '@angular/core';
import { CardType } from 'src/app/components/cards/cards.component';

@Component({
  selector: 'app-cards-body',
  templateUrl: './cards-body.component.html',
  styleUrls: ['./cards-body.component.css']
})
export class CardsBodyComponent {

  @Input() public label: string = ""
  @Input() public items: CardType[] | undefined;
  @Input() public img: string = "";
  @Input() public isMobile: boolean = false;

}
