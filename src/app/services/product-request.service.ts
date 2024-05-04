import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private http: HttpClient) {}
  getProductList() {
    return this.http.get('https://dummyjson.com/products').pipe(
      map((response: any) => response.products) 
    );
  }
  getProductDetails(id: string) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }}
