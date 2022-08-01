import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() _title: string = '';
  @Input() _price: string = '';
  @Input() _discount: string = '';
  @Input() _priceBefore: string = '';

  constructor() {}

  ngOnInit(): void {}
}
