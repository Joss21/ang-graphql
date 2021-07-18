import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import {take, tap} from 'rxjs/operators';
import { Restaurant } from '../interface/data.interface';
import { DataResponse } from '../interface/data.interface';

const QUERY = gql `
{
  restaurants{
    id
    name
    image
    description
    price
  }
}
`;
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private restaurantSubject = new BehaviorSubject<Restaurant[]>(null);
  restaurant$ = this.restaurantSubject.asObservable();
  constructor(
    private apollo: Apollo) {
       this.getDataAPI();
  }
  private getDataAPI(): void{
    this.apollo.watchQuery<DataResponse>({
      query: QUERY 
    }).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {restaurant} = data;
        this.restaurantSubject.next(restaurant.results);
      })
    ).subscribe();

  }
}