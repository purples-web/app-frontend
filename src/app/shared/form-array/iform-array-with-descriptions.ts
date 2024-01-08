import { FormControl, FormGroup } from '@angular/forms';

import { IButton } from '../button/ibutton';

export interface IFormWithDescription {
  form: FormControl;
  inputName: string;
  inputPlaceholder?: string;
  inputTitle?: string;
}

export interface IFormArrayWithDescriptions {
  forms: { [key: string]: IFormWithDescription };
  iterableForms: IFormWithDescription[];
  formGroup: FormGroup;
  formTitle: string;
  formSubTitle?: string;
  submitButton?: IButton;
}
