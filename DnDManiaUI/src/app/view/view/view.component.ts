import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [
    trigger('fade', [
      // state(),
      transition('void => *', [
        style({ color: 'black', opacity: 0 }),
        animate(2500, style({ color: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
