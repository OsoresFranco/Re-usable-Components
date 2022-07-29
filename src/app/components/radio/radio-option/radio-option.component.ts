import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss'],
})
export class RadioOptionComponent implements OnInit {
  @Output() radioEvent = new EventEmitter<any>();

  @Input() radioValue: any;
  @Input() radioName: any;
  @Input() radioId: any;
  @Input() radioDisabled: boolean = false;

  handleChange($event: any) {
    this.radioValue = $event.target.value;
    this.radioEvent.emit(this.radioValue);
  }

  constructor() {}

  ngOnInit(): void {}
}
