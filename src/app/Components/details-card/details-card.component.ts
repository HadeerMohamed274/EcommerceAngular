import { Component, Input } from '@angular/core';
import { IData } from '../../../../public/assets/productsInterface';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StarsComponent } from "../stars/stars.component";
import { CartService } from '../../services/cart.service';
import { AddToCartComponent } from "../../global/add-to-cart/add-to-cart.component";

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [CurrencyPipe, StarsComponent, CommonModule, AddToCartComponent],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent {
  @Input() product!: IData;

  selectedImage: string = '';
  activeThumbnail: string = '';
  counter;

  constructor(private cartService: CartService){
    this.counter = 0;
  }

  // ngOnInit() {
  //   this.cartService.getCart().subscribe((data: any) => {
  //     this.counter = data;
  //   })
  // }

  // increaseCounter() {
  //   this.cartService.setToCart()
  // }

  get discountedPrice(): number {
    return this.product.price * (1 - this.product.discountPercentage / 100);
  }

  updateMainImage(image: string): void {
    this.selectedImage = image;
    this.activeThumbnail = image;
  }

  quantityHandler(count: any, id: number, type: string) {

    
    if (type == 'increament') {
     ++count.innerText  
    } else if (type == 'decreament' && count.innerText > 0) {
      --count.innerText 
    }

    
  }
}
