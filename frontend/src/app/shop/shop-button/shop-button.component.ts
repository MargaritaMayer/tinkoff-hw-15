import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-button',
  templateUrl: './shop-button.component.html',
  styleUrls: ['./shop-button.component.less']
})
export class ShopButtonComponent {
  @Input()
  text: string = "";
}
