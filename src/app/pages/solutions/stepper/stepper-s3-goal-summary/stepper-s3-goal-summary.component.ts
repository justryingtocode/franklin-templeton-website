import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stepper-s3-goal-summary',
  templateUrl: './stepper-s3-goal-summary.component.html',
  styleUrls: ['./stepper-s3-goal-summary.component.scss']
})
export class StepperS3GoalSummaryComponent implements OnInit {
  @Input() allFunds: any;
  @Input() yourDetails: any;
  @Input() planDetails: any;
  @Output() backToStepper2: EventEmitter<any> = new EventEmitter();
  oldFormData: any;
  completionYear: number = 0;
  ngOnInit(): void {
    let currentYear = new Date().getFullYear();
    currentYear += this.yourDetails.retirementAgeLeft;
    this.completionYear = currentYear;
    window.scrollTo(0, 0);
  }
  salesData: ChartData<'line'> = {
    labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'This fund',
        data: [0, 5, 10, 15, 16, 22, 29, 38, 50],
        tension: 0.5,
        backgroundColor: 'rgba(32, 188, 201, 0.4)',
        borderColor: '#00847d',
        pointBackgroundColor: '#165DFF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#165DFF',
        fill: 'origin'
      },
      {
        label: 'Nifty Midcap',
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        tension: 0.5,
        backgroundColor: 'rgba(166, 105, 202, 0.2)',
        borderColor: '#a669ca',
        pointBackgroundColor: '#a669ca',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(32, 188, 201, 1)',
        fill: 'origin'
      },
    ],
  };
  chartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        grid: {
          color: 'rgba(224, 224, 224, 0.3)',
        },
        ticks: {
          callback: function (value, index, ticks) {
            return value + 'L';
          },
          color: '#8189A2',
        },
      },
      x: {
        grid: {
          color: 'rgba(255,255,255,0)',
        },
        ticks: {
          color: '#8189A2',
          font: {
            size: 12
          },
        },
      }
    },

    plugins: {
      title: {
        display: false,
        text: '',
      },
      legend: {
        display: false
      }
    },
  };
  toggleShowSavDialoge() {

  }
  toggleShowCopyDialoge() {

  }
  previousStep(id: Number) {
    const stepperStates: any = sessionStorage.getItem('stepperState');
    const stepperstate = JSON.parse(stepperStates);
    const selectedItem = stepperstate.find((e: { id: number }) => e.id === id);
    selectedItem.hasTraversed = false;
    sessionStorage.setItem('stepperState', JSON.stringify(stepperstate));
    this.backToStepper2.emit()
  }
}
