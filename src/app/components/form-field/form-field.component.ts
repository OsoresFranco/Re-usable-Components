import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const fill = {
  fill: ['form-field--filled'],
  default: [' '],
};

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
})
export class FormFieldComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean = false;

  _filled!: string;
  @Input() set filled(value: keyof typeof fill) {
    this._filled = (fill[value] || []).join(' ');
  }

  @Input() id: string = '';

  @Input() name: string = '';

  @Input() type: 'password' | 'number' | 'text' | 'email' = 'text';

  @Input() autocomplete: 'on' | 'off' = 'on';

  @Input() placeholder: string = '';

  constructor() {}

  value: any;
  public onChange!: (value: any) => void;
  public onTouched!: () => void;

  changeValue($event: any): void {
    this.onChange($event.target.value);
  }


  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}
}
