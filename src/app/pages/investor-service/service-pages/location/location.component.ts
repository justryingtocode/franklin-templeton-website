import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { event } from 'jquery';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class Location2Component {

  @Input() isSmall = false
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'FT Branches', 'CAMS'];

  otpRequired: boolean = false;
  otpSubmitted: boolean = false;

  showTextArea: boolean = false;

  filedDefaullt: boolean = false;
  otpNumber: Array<number> = [];
  remainingTime: number = 0;
  countdownTimeout: any;
  getAlert: boolean = false;
  alllocationArray : any = [];
  locationArray : any = [];
  selectedState:string = "All";
  selectedCity:string = "All";
  stateArray:any=[];
  cityArray:any=[];
  isftbranch:boolean=false;
  // investerInsideModel:boolean = false;
  

  investNowForm: FormGroup = new FormGroup({})
  intrestedForm: FormGroup = new FormGroup({})
  constructor(private _fb: FormBuilder) { }

 

  ngOnInit(){
    this.initForm();
    this.initModal();
    this.loadLocation();
  }

 

  initForm = () => {
    this.investNowForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      query: ['', Validators.required],
      remarks: ['', [Validators.required]],
      conditionCheckbox: ['']
    })
  }

  initModal = () => {
    this.intrestedForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      query: ['', Validators.required],
      riaCode: ['', Validators.required],
      comments: ['', [Validators.required]]
    })
  }

  loadLocation = () =>{
    this.selectedCategory = "All";
    this.selectedCity = "All";
    this.selectedState = "All";
    this.alllocationArray = [
      {state:"Uttar Pradesh", title:"Agra",subtitle:"Franklin Templeton",phone:"1800 258 4255/ 1800 424 4255",address:"Shop No. 3 and 4, Ground Floor, Maharshi Shivpad Complex, Plot No. 262, West High Court Road, Bajaj Nagar - 440 010",isftbranch:true},
      {state:"Maharashtra", title:"Mumbai",subtitle:"Franklin Templeton",phone:"1800 258 4255/ 1800 424 4255",address:"Shop No. 3 and 4, Ground Floor, Maharshi Shivpad Complex, Plot No. 262, West High Court Road, Bajaj Nagar - 440 010",isftbranch:true},
      {state:"Maharashtra", title:"Pune",subtitle:"Franklin Templeton",phone:"1800 258 4255/ 1800 424 4255",address:"Shop No. 3 and 4, Ground Floor, Maharshi Shivpad Complex, Plot No. 262, West High Court Road, Bajaj Nagar - 440 010",isftbranch:false},
      {state:"Punjab", title:"Chandigarh",subtitle:"Franklin Templeton",phone:"1800 258 4255/ 1800 424 4255",address:"Shop No. 3 and 4, Ground Floor, Maharshi Shivpad Complex, Plot No. 262, West High Court Road, Bajaj Nagar - 440 010",isftbranch:true},
      {state:"Rajasthan", title:"Jaipur",subtitle:"Franklin Templeton",phone:"1800 258 4255/ 1800 424 4255",address:"Shop No. 3 and 4, Ground Floor, Maharshi Shivpad Complex, Plot No. 262, West High Court Road, Bajaj Nagar - 440 010",isftbranch:false},
      {state:"Tamil Nadu", title:"Chennai",subtitle:"Franklin Templeton",phone:"1800 258 4255/ 1800 424 4255",address:"Shop No. 3 and 4, Ground Floor, Maharshi Shivpad Complex, Plot No. 262, West High Court Road, Bajaj Nagar - 440 010",isftbranch:true}
    ];
    this.locationArray = this.getFilteredLocations();
    this.selectCategory(this.selectedCategory); 
    // this.filterStates();
    // this.filterCities();   
  }

  showFilteredBranch = (branch:string) =>{
    if(branch == "All"){
      this.locationArray = this.getFilteredLocations();
    }else if(branch == "FT Branches"){
      this.locationArray = this.alllocationArray.filter((x:any)=>x.isftbranch == true);
    }else{
      this.locationArray = this.alllocationArray.filter((x:any)=>x.isftbranch == false);
    }
    this.filterStates();
    this.filterCities();
  }

  getFilteredLocations =()=>{
    if(this.selectedState != "All"){
      return this.alllocationArray.filter((x:any)=>x.state == this.selectedState);
    }else{
      return this.alllocationArray;
    }
    
  }

  stateChange=(event:any)=>{
  this.selectedState = event.target.value;
  // this.locationArray = this.getFilteredLocations();
  this.filterCities(this.selectedState);
  }

  cityChange = (event:any)=>{
    this.selectedCity = event.target.value;
  }

  filterStates=()=>{
    this.stateArray = [...new Set(this.locationArray.map((item:any) => item.state))];
  }
  filterCities=(state:string = "")=>{
    if(!state || state == "All"){
      this.cityArray = [...new Set(this.locationArray.map((item:any) => item.title))];
    }else{
      this.cityArray = [...new Set(this.locationArray.filter((x:any)=>x.state == state).map((item:any) => item.title))];
    }    
  }

  selectCategory(category: string): void {
    console.log(category)
    this.selectedCategory = category;
    this.selectedState = "All";
    this.showFilteredBranch(category);
  }

  btnSearchClick=()=>{
    this.locationArray = this.locationArray.filter((x:any)=>{
      return (x.state == this.selectedState || this.selectedState == "All") && (x.title == this.selectedCity || this.selectedCity == "All")
    });
    
  }

  clearFields() {
    this.otpRequired = false;
    this.otpSubmitted = false;
  }

  onSelect() {
    this.showTextArea = true;
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

  startCountdown() {
    clearTimeout(this.countdownTimeout); // Clear any existing timeout
    if (this.remainingTime > 0) {
      this.countdownTimeout = setTimeout(() => {
        this.remainingTime--;
        this.startCountdown(); // Recursively call startCountdown
      }, 1000); // Update every 1 second (1000 milliseconds)
    }
  }

  resetCountdown() {
    clearTimeout(this.countdownTimeout); // Clear the countdown timeout
    this.remainingTime = 30; // Reset the remaining time
    this.startCountdown();
  }

  moveTo() {
    clearInterval(this.countdownTimeout); // Clear the previous interval
    this.remainingTime = 30; // Reset the countdown time
    this.otpRequired = !this.otpRequired;
    this.investNowForm.reset();
    this.startCountdown()
  }

  forAlert()
  {
    this.getAlert = !this.getAlert;
  }
}
