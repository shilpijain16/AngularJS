import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroObj: Hero = {
    id: 1,
    name: 'Shilpi'
  };

  titleh = 'abc';
  constructor() {}

  ngOnInit() {
  }

}
