import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IFormArrayWithDescriptions } from './iform-array-with-descriptions';
import { IFormButton } from '../form-button/iform-button';
import { IFormInputWithLabel } from '../form-input/iform-input-with-label';
import { FormStyle } from './form-style';
import { FormItems } from './form-items';
import { IFormItem } from './iform-item';

interface IRequiredFormArrayWithDescriptions {
  forms?: { [key: string]: IFormInputWithLabel };
  formsStyle?: FormStyle;
  buttons?: { [key: string]: IFormButton };
  activeItems?: { [key: string]: FormItems };
  onCreate?: () => void;
  onDestroy?: () => void;
}

export class FormArrayWithDescriptions implements IFormArrayWithDescriptions {
  public forms?: { [key: string]: IFormInputWithLabel };

  private _formGroup?: FormGroup;

  public formsStyle?: FormStyle;

  public buttons?: { [key: string]: IFormButton };

  public activeItems?: { [key: string]: FormItems };

  public onCreate?: () => void;

  public onDestroy?: () => void;

  constructor(formArrayWithDescriptions: IRequiredFormArrayWithDescriptions) {
    this.forms = formArrayWithDescriptions.forms;
    this.formsStyle = formArrayWithDescriptions.formsStyle;
    this.buttons = formArrayWithDescriptions.buttons;
    this.activeItems = formArrayWithDescriptions.activeItems;
    this.onCreate = formArrayWithDescriptions.onCreate;
    this.onDestroy = formArrayWithDescriptions.onDestroy;
  }

  public getFormInputWithLabel(
    inputName: string,
  ): IFormInputWithLabel | undefined {
    return this.forms ? this.forms[inputName] : undefined;
  }

  private getFormButton(buttonName: string): IFormButton | undefined {
    return this.buttons ? this.buttons[buttonName] : undefined;
  }

  public getFormControl(formName: string): FormControl | undefined {
    return this.getFormInputWithLabel(formName)?.form;
  }

  public get iterableItems(): Required<IFormItem>[] {
    if (!this.activeItems) return [];
    const iterableItems: Required<IFormItem>[] = [];
    for (const [key, value] of Object.entries(this.activeItems)) {
      const formInputWithLabel = this.getFormInputWithLabel(key);
      const formButton = this.getFormButton(key);
      switch (value) {
        case FormItems.FORM_INPUT_WITH_LABEL:
          if (formInputWithLabel) iterableItems.push(formInputWithLabel);
          break;
        case FormItems.BUTTON:
          if (formButton) iterableItems.push(formButton);
          break;
      }
    }
    return iterableItems;
  }

  public get formGroup(): FormGroup {
    if (!this._formGroup) {
      this._formGroup = new FormGroup({});

      if (this.activeItems)
        for (const [key, value] of Object.entries(this.activeItems)) {
          if (value === FormItems.FORM_INPUT_WITH_LABEL) {
            this._formGroup.addControl(key, this.getFormControl(key));
          }
        }
    }
    return this._formGroup;
  }

  public isInvalid(): boolean {
    return this.formGroup.invalid;
  }

  public getFormValueChanges(formName: string): Observable<string> | undefined {
    return this.getFormInputWithLabel(formName)?.getValueChanges();
  }
}