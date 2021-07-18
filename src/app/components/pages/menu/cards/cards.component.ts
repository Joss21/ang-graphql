import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Restaurant } from '@app/shared/interface/data.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  @Input() restaurant: Restaurant; 

} 
