import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // 儲存 1-100
  numbers: Array<number>;
  // 除數，每次第一個選到的數
  divisor: number = 0;
  // 選擇的數字，不含除數
  selected: Array<number> = [];
  // 儲存非質數的數字
  hidden: Array<number> = [];

  constructor(titleService: Title) {
    titleService.setTitle('百數表');
    this.numbers = Array(100).fill(0).map((value, index) => index + 1);
  }

  getStatusClass(num: number) {
    return {
      active: this.selected.indexOf(num) > -1,
      'is-divisor': this.divisor === num,
      disabled: this.hidden.indexOf(num) > -1
    };
  }

  onClick(num: number): void {
    // 已隱藏的略過
    if (this.hidden.indexOf(num) > -1) {
      return;
    }

    // 已選取（非除數）的從陣列中移除後跳出
    if (this.selected.indexOf(num) > -1) {
      this.selected.splice(this.selected.indexOf(num), 1);
      return;
    }

    // 若為除數則將除數重設後跳出
    if (this.divisor === num) {
      this.divisor = 0;
      return;
    }

    // 將第一個選取的數（此時除數為 0）設為除數後跳出
    if (this.divisor === 0) {
      this.divisor = num;
      // if (num === 1) {
      //   // 若為 1，則加入陣列
      //   this.selected.push(1);
      // }
      return;
    }

    // 將第二個以後選取的數加入陣列
    this.selected.push(num);
  }

  onHidden(): void {
    // 處理除數為 1 的狀況
    if (this.divisor === 1) {
      this.hidden.push(1);
      this.divisor = 0;
    }

    this.hidden = this.hidden.concat(this.selected);
    this.selected = [];
  }

  onReset() {
    this.divisor = 0;
    this.selected = [];
    this.hidden = [];
  }

}
