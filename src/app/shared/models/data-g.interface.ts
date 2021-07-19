import { RestaurantModel } from './data.interface';

export interface Response{
  getRestaurants: RestaurantModel[];
}