import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { IInput } from '../input/iinput';

export interface IInputWithLabel {
  input: IInput;
  title: string;
  class: string[];
  invalid: boolean;
  hasError(error: string): boolean;
  valueChanges$: Observable<string>;
  formControl: FormControl;
}
