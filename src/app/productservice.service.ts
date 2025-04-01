import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private readonly http: HttpClient = inject(HttpClient);
  private url = "https://fakestoreapi.com/products";
 

    getProducts():Observable<any> {
      return this.http.get(this.url)
    }
}
