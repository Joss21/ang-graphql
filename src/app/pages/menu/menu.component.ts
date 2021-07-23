import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from '@app/shared/models/data.interface';
import { QUERY } from '@app/shared/service/data.service';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  restaurants: RestaurantModel[] | undefined;

  constructor(private apollo: Apollo) { }
  ngOnInit(): void {
    this.synch();
  }

  synch(): void {
    this.apollo.watchQuery<any>({
      query: QUERY,
    }).valueChanges.subscribe(
      ({ data, loading }) => {
        this.restaurants = data.restaurants;
        console.log(this.restaurants);
      }
    )
  }
}