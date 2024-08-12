import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ProductsRequestsService } from '../../services/products-requests.service';
import { IData } from '../../../../public/assets/productsInterface';
import { ProductsCardsComponent } from "../../Components/products-cards/products-cards.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLinkActive, ProductsCardsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products : IData[] = [];
  constructor(private productsService: ProductsRequestsService) { }

  ngOnInit(){
    this.productsService.getProducts().subscribe((data : any) => this.products = data.products);
  }

  
}
