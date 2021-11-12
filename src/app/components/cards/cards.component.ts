import { Component, Input } from '@angular/core';

export type CardType = {
  img: string,
  start_time?: string,
  end_time?: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() public item: CardType | undefined;
  constructor() { }

}
