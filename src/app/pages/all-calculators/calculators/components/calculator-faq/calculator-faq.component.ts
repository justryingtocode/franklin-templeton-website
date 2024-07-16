import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-faq',
  templateUrl: './calculator-faq.component.html',
  styleUrls: ['./calculator-faq.component.scss']
})
export class CalculatorFaqComponent {
  @Input() faqs:any =[];

  ngOnInit(): void {
  }
}
