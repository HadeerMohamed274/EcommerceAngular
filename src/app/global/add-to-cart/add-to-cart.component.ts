import { Component, Input } from '@angular/core';
import { IData } from '../../../../public/assets/productsInterface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @Input() product!: IData;
  @Input() count : number = 1;
  
  constructor(private cartService: CartService){}

  addToCart() {
    console.log(this.product.quantity)
    this.cartService.setToCart(this.product, this.count);
  }
}
