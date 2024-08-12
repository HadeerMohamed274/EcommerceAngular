import { Component, Input } from '@angular/core';
import { IData } from '../../../../public/assets/productsInterface';
import { ProductsRequestsService } from '../../services/products-requests.service';
import { DetailsCardComponent } from '../../Components/details-card/details-card.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [DetailsCardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productDetails!: IData ;
  @Input() id!: string;
  constructor(
    private productsService: ProductsRequestsService,

  ) { }

  ngOnInit() {
    this.productsService.getProductDetails(this.id).subscribe((data: any) => this.productDetails = data);
  }
}

//parent