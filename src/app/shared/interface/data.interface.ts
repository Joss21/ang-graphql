export interface APIResponse<R>{
    results: R;
}
export interface DataResponse{
    restaurant: APIResponse<Restaurant[]>;
}

export interface Restaurant{
    id: number;
    name: string;
    image: string;  
    description: string;
    price: string;
}