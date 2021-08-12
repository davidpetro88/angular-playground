import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadData(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 500)
  }

}
