import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  // Constant variable 
  readonly _FREQUENCY: any = {
    "DEFAULT": 4,
    "ANNUAL": 1,
    "HALFYEARLY": 2,
    "QUARTERLY": 4,
    "MONTHLY": 12,
    "WEEKLY": 52,
    "DAILY": 250,
  }

  static readonly _ROI_RATE: number = 13;     // Default 13
  readonly _ROI_RATE_PERCENT: number = (CalculatorService._ROI_RATE / 100);


  // Constructor
  constructor() { }

  // get FV (future value)
  future_value = (rate: any, nper: any, pmt: any, pv: any, type: any = 0) => {
    // rate: interest rate per period
    // nper: number of periods
    // pmt: payment amount per period
    // pv: present value (loan amount)
    // type: payment at the beginning (1) or end (0) of the period
    var pow = Math.pow(1 + rate, nper),
      fv: number;
    if (rate) {
      fv = (pmt * (1 + rate * type) * (1 - pow) / rate) - pv * pow;
    } else {
      fv = -1 * (pv + pmt * nper);
    }
    return fv.toFixed(2);
  }

  // Get PMT (payment)
  payment(rate: any, nper: any, pv: any, fv: any, type: any = 0) {
    // rate: interest rate per period
    // nper: number of periods
    // pv: present value (loan amount)
    // fv: future value
    // type: payment at the beginning (1) or end (0) of the period

    if (rate === 0) {
      return -(pv + fv) / nper;
    }
    const pvif = Math.pow(1 + rate, nper);
    const pmt = (rate / (pvif - 1)) * -(pv * pvif + fv);
    if (type === 1) {
      return pmt / (1 + rate);
    }
    return pmt;
  }

  // Get PV (Present Value)
  present_value(rate: any, periods: any, payment: number, future: number, type: number) {
    // rate: interest rate per period
    // nper: number of periods
    // pmt: payment amount per period
    // fv: future value
    // type: payment at the beginning (1) or end (0) of the period

    var type = (typeof type === 'undefined') ? 0 : type;

    // Evaluate rate and periods (TODO: replace with secure expression evaluator)
    rate = eval(rate);
    periods = eval(periods);

    // Return present value
    if (rate === 0) {
      return - payment * periods - future;
    } else {
      return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
    }
  }

  /********************* 1. CALCULATOR SIP  ***********************/

  // SIP > Investment Amount
  get_sip(amount: number, periodYear: number, roiRate: number = 0, time = "DEFAULT", hasGraphData: boolean = false) {
    let roiRatePercent = this._ROI_RATE_PERCENT;
    let frequency = this._FREQUENCY[time];
    if (!frequency) {
      frequency = this._FREQUENCY['DEFAULT'];
    }

    if (roiRate) {
      roiRatePercent = roiRate / 100;
    }

    let intervals = periodYear * frequency;
    let investedAmt: number = intervals * amount;

    let eff_rate = Math.pow((1 + roiRatePercent), (1 / frequency)) - 1

    const interestRate = eff_rate; // 5%
    const numberOfPeriods = (periodYear * frequency);
    const paymentAmount = -amount; // Monthly payment (negative)
    const presentValue = 0;
    const paymentType = 1; // 0 for end of the period, 1 for beginning
    let resultantAmt: any = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);


    // Final data
    const finalData: any = {
      totalInvestAmt: investedAmt,
      totalValues: Math.round(resultantAmt),
      totalReturns: (resultantAmt - investedAmt),
    }

    // Table & graph Data
    let eachYearData: any = [];
    if(hasGraphData){
      eachYearData = this.get_sip_graph( amount, periodYear, roiRate, time );
      finalData['eachYearData'] = eachYearData;
    }

    return finalData
  }

  // SIP > Investment Amount > Graph
  get_sip_graph(amount: number, periodYear: number, roiRate: number = 0, time = "DEFAULT"){

    let roiRatePercent = this._ROI_RATE_PERCENT;
    let frequency = this._FREQUENCY[time];
    if (!frequency) {
      frequency = this._FREQUENCY['DEFAULT'];
    }
    if (roiRate) {
      roiRatePercent = roiRate / 100;
    }
    let eff_rate = Math.pow((1 + roiRatePercent), (1 / frequency)) - 1

    let currentYear = new Date();
    const yearlyData = []
    for(let i=1; i <= periodYear; i++){
      let each_year = i;
      let investedAmt = (each_year * amount * frequency);
      
      const each_interestRate = eff_rate; // 
      const each_numberOfPeriods = ( each_year * frequency );
      const each_paymentAmount = -amount; // Monthly payment (negative)
      const each_presentValue = 0;
      const each_paymentType = 1; // 0 for end of the period, 1 for beginning
      let each_expectedAmt: any = this.future_value(each_interestRate, each_numberOfPeriods, each_paymentAmount, each_presentValue, each_paymentType);
      
      each_expectedAmt = Math.round(each_expectedAmt);
      investedAmt = Math.round(investedAmt);

      yearlyData.push({
        year: currentYear.getFullYear(),
        investedAmt: investedAmt,
        expectedAmt: each_expectedAmt,
        returnsGained: (each_expectedAmt - investedAmt),
      })

      //move to next year
      currentYear.setFullYear(currentYear.getFullYear() + 1)
    }

    return yearlyData;
  }

  // SIP > Investment Amount > Monthly SIP
  monthly_sip(amount: number, periodYear: number, roiRate: number = 0) {
    let time = "MONTHLY";
    return this.get_sip(amount, periodYear, roiRate, time);
  }

  // SIP > Targeted Amount
  get_sip_targeted_amt(earn: number, time: string, periodYear: number, expectedRoi: number, hasGraphData: boolean = false) {
    let roiRatePercent = this._ROI_RATE_PERCENT;
    let frequency = this._FREQUENCY[time];
    if (!frequency) {
      frequency = this._FREQUENCY['DEFAULT'];
    }
    if (expectedRoi) {
      roiRatePercent = expectedRoi / 100;
    }
    let eff_rate = Math.pow((1 + roiRatePercent), (1 / frequency)) - 1

    const interestRate = eff_rate; // 5%
    const numberOfPeriods = (periodYear * frequency);
    const loanAmount = 0;
    const futureValue = -earn;
    const paymentType = 1; // 0 for end of the period, 1 for beginning
    const installmentAmount = this.payment(interestRate, numberOfPeriods, loanAmount, futureValue, paymentType);

    let intervals = periodYear * frequency;
    let investedAmt: number = intervals * installmentAmount;

     // Final data
     const finalData: any = {
      totalInvestAmt: Math.round(investedAmt),
      installmentAmount: Math.round(installmentAmount)
    }

    // Table & graph Data
    let eachYearData: any = [];
    if(hasGraphData){
      eachYearData = this.get_sip_graph(installmentAmount, periodYear, expectedRoi, time);
      finalData['eachYearData'] = eachYearData;
    }

    return finalData

  }

  // SIP > Targeted Year
  get_sip_targeted_year(amount: number, earn: number, time: string, expectedRoi: number) {
    amount = Number(amount);
    earn = Number(earn);
    expectedRoi = Number(expectedRoi);
    let roiRatePercent = this._ROI_RATE_PERCENT;
    let frequency = this._FREQUENCY[time];
    if (!frequency) {
      frequency = this._FREQUENCY['DEFAULT'];
    }
    if (expectedRoi) {
      roiRatePercent = expectedRoi / 100;
    }
    let eff_rate = Math.pow((1 + roiRatePercent), (1 / frequency)) - 1

    let targetYear: any =( (Math.log((earn * eff_rate / amount) + 1) ) / Math.log(1+eff_rate) ) / frequency;
    targetYear = Math.ceil(targetYear);

    let currentYear = new Date();
    let eachYearData = [];
    for(let i = 1; i <= targetYear; i++){
      let each_year = i;

      const interestRate = eff_rate; // 5%
      const numberOfPeriods = (each_year * frequency);
      const paymentAmount = -amount; // Monthly payment (negative)
      const presentValue = 0;
      const paymentType = 1; // 0 for end of the period, 1 for beginning

      // resultant amt
      let resultantAmt: any = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);
      
      // invested amt
      let investedAmt = (amount * frequency * each_year)

      eachYearData.push({
        year: currentYear.getFullYear(),
        expectedAmt: Math.round(resultantAmt),
        investedAmt: investedAmt
      });

      //move to next year
      currentYear.setFullYear(currentYear.getFullYear() + 1)
    }

    return {
      targetYear: targetYear,
      eachYearData: eachYearData
    }


  }



  /********************* 2. CALCULATOR LUMPSUM  ***********************/
  // Lumpsump > Investment Amount
  get_lumpsum(amount: number, periodYear: number, roiRate: number = 0, hasGraphData: boolean= false) {
    let roiRatePercent = this._ROI_RATE_PERCENT;
    if (roiRate) {
      roiRatePercent = roiRate / 100;
    }

    let investedAmt: number = amount;

    const interestRate = roiRatePercent; // 5%
    const numberOfPeriods = periodYear;
    const paymentAmount = 0; // Monthly payment (negative)
    const presentValue = -amount;
    const paymentType = 0; // 0 for end of the period, 1 for beginning
    let resultantAmt: any = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);

    // Final data
    const finalData: any = {
      totalInvestAmt: investedAmt,
      totalValues: resultantAmt,
      totalReturns: (resultantAmt - investedAmt),
    }

    // Table & graph Data
    let eachYearData: any = [];
    if(hasGraphData){
      eachYearData = this.get_lumpsum_graph(amount, periodYear, roiRate);
      finalData['eachYearData'] = eachYearData;
    }

    return finalData
  }

  // Lumpsump > Investment Amount > Graph
  get_lumpsum_graph(amount: number, periodYear: number, roiRate: number = 0, hasGraphData: boolean= false){
    let roiRatePercent = this._ROI_RATE_PERCENT;
    if (roiRate) {
      roiRatePercent = roiRate / 100;
    }

    let investedAmt: number = amount;
    let currentYear = new Date();
    const yearlyData = []
    for(let i=1; i <= periodYear; i++){
      let each_year = i;
      const interestRate = roiRatePercent; // 5%
      const numberOfPeriods = each_year;
      const paymentAmount = 0; // Monthly payment (negative)
      const presentValue = -amount;
      const paymentType = 0; // 0 for end of the period, 1 for beginning
      let expectedAmt: any = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);

      yearlyData.push({
        year: currentYear.getFullYear(),
        expectedAmt: Math.round(expectedAmt),
        investedAmt: investedAmt
      })

      //move to next year
      currentYear.setFullYear(currentYear.getFullYear() + 1)
    }
    return yearlyData;

  }

  // Lumpsump > Targeted Amount
  get_lumpsum_targeted_amt(earn: number, periodYear: number, expectedRoi: number, hasGraphData: boolean = false) {
    let roiRatePercent = this._ROI_RATE_PERCENT;
    if (expectedRoi) {
      roiRatePercent = expectedRoi / 100;
    }

    const interestRate = roiRatePercent; // 5%
    const numberOfPeriods = periodYear;
    const paymentAmount = 0; // Monthly payment (negative)
    const futureValue = -earn;
    const paymentType = 0; // 0 for end of the period, 1 for beginning
    let requiredInvestment = this.present_value(interestRate, numberOfPeriods, paymentAmount, futureValue, paymentType);

    // Final data
    const finalData: any = {
      requiredInvestment:  Math.round(requiredInvestment),
      totalReturns:  Math.round((earn - requiredInvestment))
    }
    
    // Table & graph Data
    let eachYearData: any = [];
    if(hasGraphData){
      eachYearData = this.get_lumpsum_graph(requiredInvestment, periodYear, expectedRoi);
      finalData['eachYearData'] = eachYearData;
    }
    
    return finalData
  }

  // Lumpsump > Targeted Year
  get_lumpsum_targeted_year(amount: number, earn: number, period: number, expectedRoi: number){
    let roiRatePercent = this._ROI_RATE_PERCENT;
    if (expectedRoi) {
      roiRatePercent = expectedRoi / 100;
    }

    let targetYear: any = (Math.log(earn/amount)) / Math.log(1+roiRatePercent);
    targetYear = Math.ceil(targetYear);

    let currentYear = new Date();
    let eachYearData = [];
    for(let i = 1; i <= targetYear; i++){
      let each_year = i;

      const interestRate = roiRatePercent; // 5%
      const numberOfPeriods = each_year;
      const paymentAmount = 0; // Monthly payment (negative)
      const presentValue = -amount;
      const paymentType = 0; // 0 for end of the period, 1 for beginning
      let resultantAmt: any = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);

      eachYearData.push({
        year: currentYear.getFullYear(),
        expectedAmt: Math.round(resultantAmt),
        investedAmt: amount
      });

      //move to next year
      currentYear.setFullYear(currentYear.getFullYear() + 1)
    }

    return {
      targetYear: targetYear,
      eachYearData: eachYearData
    }
  }

/********************* 3. CALCULATOR SIP Top-Up ***********************/

 get_sip_topup(amount: number, time: any, increaseAmount: number, increasePercent:number, periodYear: number, expectedRoi: number, isIncreaseByPercent: boolean){
  let increaseTopupPercent = 0;
  let expectedRoiPercent = 0;
  
  let frequency = this._FREQUENCY[time];
  if (!frequency) {
    frequency = this._FREQUENCY['DEFAULT'];
  }
  
  if (increasePercent !== undefined) {
    increaseTopupPercent = increasePercent / 100;
  }
  
  if(expectedRoi){
    expectedRoiPercent = expectedRoi / 100;
  }

  let intervals = periodYear * frequency;
  
  let expected_eff_rate = Math.pow((1 + expectedRoiPercent), (1 / frequency)) - 1
  // let Increase_eff_rate = Math.pow((1 + increaseRoiPercent), (1 / frequency)) - 1
  

  let currentYear = new Date();
  let intermediateAmt = Number(amount);
  let resultantAmt = 0
  let eachYearTopUp = [];
  let investmentAmt = 0
  for(let i=1; i <= periodYear ; i++){
    const interestRate = expected_eff_rate; // 5%
    const numberOfPeriods = frequency;
    const paymentAmount = -intermediateAmt; // Monthly payment (negative)
    const presentValue = -resultantAmt;
    const paymentType = 1; // 0 for end of the period, 1 for beginning
    let expectedAmt: any = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);

    const topupAmt = (intermediateAmt * increaseTopupPercent) + Number(increaseAmount)
    investmentAmt += (intermediateAmt * frequency)
    eachYearTopUp.push({
      year: currentYear.getFullYear(),
      investedAmt: Math.round(investmentAmt),
      resultantAmt: Math.round(expectedAmt)
    });

    // Reset values for next interval
    resultantAmt = expectedAmt;
    intermediateAmt = Number(Number(topupAmt) + intermediateAmt);

    //move to next year
    currentYear.setFullYear(currentYear.getFullYear() + 1)
  }
  let finalData = eachYearTopUp[eachYearTopUp.length - 1];

  let finalTopUpData = {
    totalInvestedAmt: finalData.investedAmt,
    resultantAmt: finalData.resultantAmt,
    eachYearData: eachYearTopUp
  };

  return finalTopUpData;

 }

 /********************* 4. CALCULATOR STP ***********************/
 get_stp(sourceFund: number, targetFund: number, time: number, periodYear: number, sourceROR: number, targetROR:number){
  let sourceRORPercent = 0;
  let targetRORPercent = 0;

  let frequency = this._FREQUENCY[time];
  if (!frequency) {
    frequency = this._FREQUENCY['DEFAULT'];
  }

  sourceRORPercent = sourceROR/100;
  targetRORPercent = targetROR/100;

  let source_ror_eff_rate = Math.pow((1 + sourceRORPercent), (1 / frequency)) - 1
  let target_ror_eff_rate = Math.pow((1 + targetRORPercent), (1 / frequency)) - 1

  let intervals = periodYear * frequency;

  let currentYear = new Date();
  let eachStpData = [];
  let s_intermediate_presentValue = Number(sourceFund);
  let t_intermediate_presentValue = 0;

  let recordDataOnFequency = 0;
  for(let i=1; i <= intervals ; i++){
    recordDataOnFequency++;
    const hasFundToInvest = ( Number(targetFund) < Number(s_intermediate_presentValue))

    const numberOfPeriods = 1; // need to calculate each period as some preriod might not have fund
    
    const s_interestRate = source_ror_eff_rate; 
    const s_paymentAmount = hasFundToInvest ? Number(targetFund): 0 ; 
    const s_presentValue = -s_intermediate_presentValue;  // - negative;
    const s_paymentType = 0; // 0 for end of the period, 1 for beginning
    let sourceResultant: any = this.future_value(s_interestRate, numberOfPeriods, s_paymentAmount, s_presentValue, s_paymentType);
    
    const t_interestRate = target_ror_eff_rate;
    const t_paymentAmount = hasFundToInvest ? -Number(targetFund): 0;  // - negative;
    const t_presentValue = -t_intermediate_presentValue; // - negative;
    const t_paymentType = 1; // 0 for end of the period, 1 for beginning
    let destinationResultant: any = this.future_value(t_interestRate, numberOfPeriods, t_paymentAmount, t_presentValue, t_paymentType);

    if(recordDataOnFequency == frequency){
      eachStpData.push({
        year: currentYear.getFullYear(),
        sourceFund: Math.round(sourceResultant),
        destinationFund: Math.round(destinationResultant)
      });

      //move to next year
      currentYear.setFullYear(currentYear.getFullYear() + 1);
      recordDataOnFequency = 0;
    }

    // Reset values for next interval
    s_intermediate_presentValue = sourceResultant;
    t_intermediate_presentValue = destinationResultant;
  
  }// loops end's

  let finalData = eachStpData[eachStpData.length - 1];

  let finalTopUpData = {
    investedAmt: Number(sourceFund),
    sourceFund: finalData.sourceFund,
    destinationFund: finalData.destinationFund,
    totalInvestmentValue: (finalData.sourceFund + finalData.destinationFund),
    eachYearData: eachStpData
  };

  return finalTopUpData;
 }

 /********************* 5. CALCULATOR SWP ***********************/
 get_swp(amount: number, time: number, periodYear: number, withdraw: number, expectedROR: number){
  let expectedRORPercent = 0;

  withdraw = Number(withdraw);
  amount = Number(amount);

  let frequency = this._FREQUENCY[time];
  if (!frequency) {
    frequency = this._FREQUENCY['DEFAULT'];
  }

  expectedRORPercent = expectedROR/100;

  let eff_rate = Math.pow((1 + expectedRORPercent), (1 / frequency)) - 1

  let intervals = periodYear * frequency;

  let currentYear = new Date();
  let eachSwpData = [];
  let intermediate_presentValue = amount;
  let intermediate_withdrownAnt = 0;
  let hasFundToInvest = ( withdraw < amount);
  let recordDataOnFequency = 0;
  for(let i=1; i <= intervals ; i++){
    recordDataOnFequency++;

    const numberOfPeriods = 1; // need to calculate each period as some preriod might not have fund
    
    const interestRate = eff_rate; 
    let paymentAmount = hasFundToInvest ? withdraw: 0; 
    const presentValue = -intermediate_presentValue;  // - negative;
    const paymentType = 0; // 0 for end of the period, 1 for beginning
    let balanceResultant: any = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);
    

    // regenerate FV with withdraw payment if this inverval has greater value than withdraw value.
    if(!hasFundToInvest && (withdraw < Number(balanceResultant))){
      paymentAmount = withdraw;
      balanceResultant = this.future_value(interestRate, numberOfPeriods, paymentAmount, presentValue, paymentType);

      hasFundToInvest = true;   //  as fund has deducted this will turn into true.
    }

    // Sum withdraw amount in both condition.
    
    if(hasFundToInvest){
      intermediate_withdrownAnt += withdraw;
    }

    if(recordDataOnFequency == frequency){
      eachSwpData.push({
        year: currentYear.getFullYear(),
        investedAmt: amount,
        withdrawnAmt: Math.round(intermediate_withdrownAnt),
        returnsVal: Math.round((Number(intermediate_withdrownAnt) + Number(balanceResultant)) - amount),
        balanceVal: Math.round(balanceResultant)
      });

      //move to next year
      currentYear.setFullYear(currentYear.getFullYear() + 1);
      recordDataOnFequency = 0;
    }

    // Reset values for next interval
    intermediate_presentValue = balanceResultant;
    hasFundToInvest =  (Number(withdraw) < Number(balanceResultant));
      
  }// loops end's

  let finalData = eachSwpData[eachSwpData.length - 1];

  let finalTopUpData = {
    investedAmt: Number(amount),
    totalWithdrawnAmt: finalData.withdrawnAmt,
    totalReturnsVal: finalData.returnsVal,
    totalBalanceVal: finalData.balanceVal,
    eachYearData: eachSwpData
  };

  return finalTopUpData;
 }
 
 /********************* 6. CALCULATOR CAGR ***********************/
 get_cagr(initAmount: number, resultantAmt: number, periodYear: number){
   // convert into number datat ype
   initAmount = Number(initAmount);
   resultantAmt = Number(resultantAmt);

  const cagr = (Math.pow(resultantAmt/initAmount, 1/ periodYear) - 1);
  const cagrPercent = (cagr * 100)

  let currentYear = new Date();
  let eachYearData = [];
  let intermediateAmt = initAmount;
  for(let i=1; i <= periodYear ; i++){

    let each_finalInvestment = (intermediateAmt + (cagr * intermediateAmt));
    
    eachYearData.push({
      year: currentYear.getFullYear(),
      amountInvested: Math.round(intermediateAmt),
      initAmount: initAmount,
      finalInvestment: Math.round(each_finalInvestment)
    })

    // Reset values for next interval
    intermediateAmt = each_finalInvestment;

    //move to next year
    currentYear.setFullYear(currentYear.getFullYear() + 1)
  }

  let finalData = {
    cagr: Number(cagrPercent.toFixed(2)),
    eachYearData: eachYearData
  }
  return finalData;
 }

} // Class End's
