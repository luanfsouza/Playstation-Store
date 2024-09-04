import { Component, Input } from '@angular/core';

import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = 'exclusive';
  @Input()
  gameStatus: string = 'Play it Now!';
  @Input()
  gameType: string = 'DIGITAL PS4';
  @Input()
  gamePrice: string = 'R$ 399,90';
  
  constructor(){}
  
  ngOnInit(): void {
    this.gameLabel = this.gameLabel.toUpperCase();
  }
}
