import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.scss',
})
export class CardPricingComponent {
  @Input()
  gameStatus: string = "Play it Now!"
  @Input()
  gameType: string = 'DIGITAL PS4';
  @Input()
  gamePrice: string = 'R$ 399,90';
}
