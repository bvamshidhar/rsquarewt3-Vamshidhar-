import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.css']
})
export class MatSliderComponent implements OnInit {

  myModel = 3000000;

  constructor() { }

  ngOnInit() {
  }

}
