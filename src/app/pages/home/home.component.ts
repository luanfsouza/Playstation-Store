import { CardComponent } from "../../components/card/card.component";
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
