import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioOptionComponent } from '../radio-option/radio-option.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent
  implements OnInit, ControlValueAccessor, AfterContentInit
{
  @ContentChildren(RadioOptionComponent)
  templates!: QueryList<RadioOptionComponent>;

  ngAfterContentInit() {
    this.templates.forEach((template) => {
      template.radioEvent.subscribe({
        next: (valor: any) => {
          this.writeValue(valor);
        },
      });
    });
  }

  ngOnInit(): void {}

  radioValue: any = ''

  private onChange = (value: any) => {};

  changeTest(value: any) {
    this.onChange(this.radioValue);
  }

  @Input() align: 'vertical' | 'horizontal' = 'vertical';

  constructor(private cd: ChangeDetectorRef) {}

  writeValue(obj: any): void {
    this.radioValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}
}
