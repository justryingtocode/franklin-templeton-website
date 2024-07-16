import { Component } from '@angular/core';

@Component({
  selector: 'app-test-your-learning',
  templateUrl: './test-your-learning.component.html',
  styleUrls: ['./test-your-learning.component.scss']
})
export class TestYourLearningComponent {

  questions = [ 
    {
      "id": 1,
      "question": "What type of investor  _________ is a  fund?",
      "options": ["Equity Fund", "Debt Fund", "Hybrid Fund", "Money Market Fund"]
    },
    {
      "id": 2,
      "question": "Which type of fund  _________ is  for  investors?",
      "options": ["Equity Fund", "Debt Fund", "Hybrid Fund", "Money Market Fund"]
    },
    {
      "id": 3,
      "question": "What is the   _________  of a money  mutual fund?",
      "options": ["Capital Appreciation", "Income Generation", "Principal Preservation", "Speculation"]
    } ,
    {
      "id": 4,
      "question": "In a debt fund _________  the  of consists of:",
      "options": ["Government Securities", "Corporate Bonds", "Equity Shares", "Commercial Papers"]
    },
    {
      "id": 5,
      "question": "Which factor _________  to consider a mutual fund?",
      "options": ["Expense Ratio", "Past Performance", "Fund Manager's Experience", "All of the Above"]
    },
    {
      "id": 6,
      "question": "What is the purpose _________  Investment in mutual funds?",
      "options": ["Generate Regular Income", "Speculative Trading", "Systematic Withdrawal", "Regular Investment over Time"]
    }, {
      "id": 7,
      "question": "What is the purpose _________  Investment in mutual funds?",
      "options": ["Generate Regular Income", "Speculative Trading", "Systematic Withdrawal", "Regular Investment over Time"]
    }, {
      "id": 8,
      "question": "What is the purpose _________  Investment in mutual funds?",
      "options": ["Generate Regular Income", "Speculative Trading", "Systematic Withdrawal", "Regular Investment over Time"]
    }, {
      "id": 9,
      "question": "What is the purpose _________  Investment in mutual funds?",
      "options": ["Generate Regular Income", "Speculative Trading", "Systematic Withdrawal", "Regular Investment over Time"]
    }, {
      "id": 10,
      "question": "What is the purpose _________  Investment in mutual funds?",
      "options": ["Generate Regular Income", "Speculative Trading", "Systematic Withdrawal", "Regular Investment over Time"]
    }
  ];

  selectedOptions: { option: string, question: any }[] = [];
  answerInput: string = "";

  currentQuestionIndex: number = 0; 

  showSaveDialoge = false;
  makeButtonPrevious:boolean = true

  constructor() {}

  ngOnit()
  {

  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  
  goToNextQuestion() {
    this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length;
  }
  
  
  goToPreviousQuestion() {
    this.selectedOptions.pop(); // Remove the last selected option
    this.currentQuestionIndex = (this.currentQuestionIndex - 1 + this.questions.length) % this.questions.length;
    // this.updateAnswerInput();
  }
  
  
  // selectOption(option: string, data:any) {
  //   console.log(data)
  //   const oldSelectedOptions = [...this.selectedOptions]; // Copy old selected options
  //   this.selectedOptions.push(option); // Add the new selected option
  //   this.updateAnswerInput(oldSelectedOptions);
  // }
  
  selectOption(option: string, question: any) {
    console.log(this.selectedOptions.length,this.questions.length,this.selectedOptions.length <= this.questions.length -2 )
    if(this.selectedOptions.length <= this.questions.length -1)
    {
      const oldSelectedOptions = [...this.selectedOptions]; // Copy old selected options
      this.selectedOptions.push({ option, question }); // Add the new selected option with the associated question
      console.log(this.selectedOptions)
      this.makeButtonPrevious = true;
    }
    else{
      this.makeButtonPrevious = false;
    }
    if(this.selectedOptions.length <= this.questions.length - 1)
    {
      this.goToNextQuestion()
    }
  
    // this.updateAnswerInput(oldSelectedOptions);
  }
  
  // updateAnswerInput(oldSelectedOptions: string[]) {
  //   const newSelectedOptions = this.selectedOptions.join(', '); // Join new selected options into a string
  //   const oldSelectedOptionsString = oldSelectedOptions.join(', '); // Join old selected options into a string
  //   this.answerInput = `Old Selected: ${oldSelectedOptionsString}, New Selected: ${newSelectedOptions}`;
  // }
  // updateAnswerInput(oldSelectedOptions: { option: string, question: any }[] = []) {
  //   const newSelectedOptions = this.selectedOptions.map(selected => selected.option).join(', '); // Join new selected options into a string
  //   const oldSelectedOptionsString = oldSelectedOptions.map(selected => selected.option).join(', '); // Join old selected options into a string
  //   this.answerInput = `Old Selected: ${oldSelectedOptionsString}, New Selected: ${newSelectedOptions}`;
  // }
  
  isCurrentQuestion(index: number): boolean {
    return this.currentQuestionIndex === index;
  }
  
  goToQuestion(index: number) {
    this.currentQuestionIndex = index;
  }

  toggleShowSavDialoge() {
    this.showSaveDialoge = !this.showSaveDialoge;
  }

}
