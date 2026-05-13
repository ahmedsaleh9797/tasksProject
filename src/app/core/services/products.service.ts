import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

export interface Product {

  id: number;

  title: string;

  description: string;

  category: string;

  price: number;

}

export interface ProductsResponse {

  products: Product[];

}

@Injectable({
  providedIn: 'root',
})

export class ProductsService {

  private httpClient = inject(HttpClient);

  getProducts(): Observable<ProductsResponse> {

    return this.httpClient.get<ProductsResponse>(
      'https://dummyjson.com/products'
    );

  }

}