import { Component} from '@angular/core';
import { RestaurantModel } from '@app/shared/models/data.interface';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '@app/shared/models/data-g.interface';
import { QUERY } from '@app/shared/service/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  restaurants: Observable<RestaurantModel[]> | undefined;
  
  constructor(private apollo: Apollo) {}

  synch(): void{
    this.restaurants = this.apollo.watchQuery<Response>({
      query:QUERY,
    }).valueChanges.pipe(
      map((result)=>result.data.getRestaurants)
    );
    console.log(this.restaurants);
  }
}
