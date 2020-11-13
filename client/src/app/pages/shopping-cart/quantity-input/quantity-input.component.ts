import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {

  @Input()
  defaultValue = 1;
  @Input()
  header: string;
  @Output()
  valueChanged = new EventEmitter();

  value: number;



  constructor() { }

  ngOnInit() {
    this.value = this.defaultValue;
  }

  onMinus() {
    this.value--;
    this.eventEmit();
  }

  onPlus() {
    this.value++;
    this.eventEmit();
  }

  onChanged(value: number) {
    this.value = +value;
    this.eventEmit();
  }

  eventEmit() {
    this.valueChanged.emit(this.value);
  }

}
