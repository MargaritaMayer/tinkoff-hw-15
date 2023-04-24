import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shop-counter-wrapper',
  templateUrl: './shop-counter-wrapper.component.html',
  styleUrls: ['./shop-counter-wrapper.component.less']
})
export class ShopCounterWrapperComponent {
  @Input()
  public count: number = 1;

  @Output()
  public countEvent = new EventEmitter<number>();

  add(){
    this.count += 1;
    this.countEvent.emit(this.count);
  }
  
  reduce(){
    if (this.count > 1){
      this.count -= 1;
      this.countEvent.emit(this.count);
    }
  }
}
