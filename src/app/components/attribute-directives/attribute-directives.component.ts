import {Component} from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent {

  public inputValue = '';
  public secondInputValue = '';
  public colorPickerCurrentValue = 'yellow';
  public is;

  public isTextValid(): boolean {
    return this.inputValue.length < 10;
  }

  public anotherValidationCheck(): boolean {
    return this.secondInputValue.length > 5;
  }
}


