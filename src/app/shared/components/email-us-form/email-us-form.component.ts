import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-us-form',
  templateUrl: './email-us-form.component.html',
  styleUrls: ['./email-us-form.component.scss']
})
export class EmailUsFormComponent {

  @Input() isSmall = false
  intrestedForm: FormGroup = new FormGroup({})
  filedDefaullt: boolean = false;
  
  constructor(private _fb: FormBuilder) {}

  ngOnInit()
  {
    this.initModal();
  }

  initModal = () => {
    this.intrestedForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      query: ['', Validators.required],
    })
  }


  blockAlphabetsAndSpecialChars(event: any) {
    const char = event.key;
    // Check if the character is a numeric digit (0-9) or Backspace
    if (!/^[0-9]$/.test(char) && char !== 'Backspace') {
      event.preventDefault(); // Prevent the input of non-numeric characters
    }
  }

  checkboxCondition(event: any) {
    if (event.target.checked) {
      this.filedDefaullt = true;
    }
    else {
      this.filedDefaullt = false;
    }
  }

}
