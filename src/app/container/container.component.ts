import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  // 儲存 1-100
  numbers: Array<number>;
  // 除數，每次第一個選到的數
  divisor: number = 1;
  // 選擇的數字，不含除數
  selected: Array<number> = [];
  // 儲存非質數的數字
  hidden: Array<number> = [];

  constructor() {
    this.numbers = Array(100).fill(0).map((value, index) => index + 1);
    console.log(this.numbers);
  }

  onClick(num: number): void {
    if (this.divisor === 1) {
      this.divisor = num;
      if (num === 1) {
        this.selected.push(1);
      }
      return;
    }

    this.selected.push(num);
  }

  onHidden(): void {
    this.hidden.concat(this.selected);
    this.selected = [];
    this.divisor = 1;
  }

  ngOnInit() {
  }

}
