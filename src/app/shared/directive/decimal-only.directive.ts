import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[twoDecimalOnly]'
})
export class TwoDecimalOnlyDirective {
  private regex: RegExp = /^(?:\d{0,2}(?:\.\d{0,2})?|100(?:\.00?)?)$/;

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      const inputValue = inputElement.value;

      if (!inputValue.match(this.regex)) {
          inputElement.value = inputValue.slice(0, -1); // Remove the last character
      }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
      if (
          this.specialKeys.indexOf(event.key) !== -1 ||
          event.key === '.' ||
          (event.keyCode >= 35 && event.keyCode <= 39)
      ) {
          return;
      }

      const current: string = this.el.nativeElement.value;
      const position = this.el.nativeElement.selectionStart;
      const next: string = [current.slice(0, position), event.key, current.slice(position)].join('');

      if (next && !String(next).match(this.regex)) {
          event.preventDefault();
      }
  }
}

