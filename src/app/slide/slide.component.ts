import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home';

const HOMES: Home[] = [
  {
    id: '0',
    name: 'Single Family',
    image: '/assets/images/icons/Group 174@2x.png'
  },
  {
    id: '1',
    name: 'Multi Family',
    image: '/assets/images/icons/Group 175@2x.png'
  },
  {
    id: '2',
    name: 'Townhouse',
    image: '/assets/images/icons/Group 177@2x.png'
  },
  {
    id: '3',
    name: 'Condominium',
    image: '/assets/images/icons/Group 176@2x.png'
  }
];

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  homes: Home[] = HOMES;

  selectedHome: Home = HOMES[0];

  constructor() { }

  ngOnInit() {
  }

}
