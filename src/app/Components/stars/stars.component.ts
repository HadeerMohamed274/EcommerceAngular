import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IData } from '../../../../public/assets/productsInterface';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {
  @Input() rating: number = 0;

  get starsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getStarWidth(starIndex: number): number {
    const starValue = this.rating - starIndex;
    if (starValue >= 1) {
      return 100; 
    } else if (starValue > 0) {
      return starValue * 100; 
    } else {
      return 0; 
    }
  }

}
