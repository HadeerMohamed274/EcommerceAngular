import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { RouterLink } from '@angular/router';
import { IData } from '../../../../public/assets/productsInterface';

@Component({
  selector: 'app-products-cards',
  standalone: true,
  imports: [CurrencyPipe, StarsComponent, CommonModule, RouterLink],
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.css'
})
export class ProductsCardsComponent {
  @Input() product!: IData ;

  get discountedPrice(): number {
    return this.product.price * (1 - this.product.discountPercentage / 100);
  }
}
