
import { Component} from '@angular/core';
import { DataService } from '@app/shared/service/data.service';

@Component({
  selector: 'app-lists',
  template: `
  <section class="character__list">
  <app-cards 
      *ngFor="let restaurant of restaurant$ | async" [restaurant]="restaurant" >
    </app-cards>
</section>
  `,
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  restaurant$ = this.dataSvc.restaurant$;

  constructor(
    private dataSvc: DataService) { } 
}
