import { Component, inject, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  // standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit {
  // private productserv = inject(ProductserviceService);
  products:any[] = []

  isLoading = true

  constructor(private http :  HttpClient){

    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(
      (data) => {
        this.products = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    
  //  this.productserv.getProducts().subscribe(data => {
  //   this.products = data
  //   console.log(data)
  //  },
  //  error => {
  //   console.error("Error" ,error)
  //  }
    

  //  )
  }

}
