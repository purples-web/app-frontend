import { Pipe, PipeTransform } from '@angular/core';

import { FormItems } from '../form-array/form-items';
import { IFormItem } from '../form-array/iform-item';

import { FormButton } from './form-button';

@Pipe({
  name: 'isFormButton',
  standalone: true,
})
export class IsFormButtonPipe implements PipeTransform {
  transform(value: Required<IFormItem>): value is FormButton {
    return value.type === FormItems.FORM_BUTTON;
  }
}
