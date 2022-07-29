import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-radio-view',
  templateUrl: './radio-view.component.html',
  styleUrls: ['./radio-view.component.scss'],
})
export class RadioViewComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.cardSelection = this.fb.group({
      card: '',
      name:''
    });
  }

  cardSelection: FormGroup;

  ngOnInit(): void {}
}
