import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  numbers: Array<number>;
  constructor() {
    this.numbers = Array(100).fill(0).map((value, index) => index + 1);
    console.log(this.numbers);
  }

  ngOnInit() {
  }

}
