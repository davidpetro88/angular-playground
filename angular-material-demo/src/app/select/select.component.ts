import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selectedValue: string = '';
  selectedValue2: string = '';

  constructor() {}


  ngOnInit(): void {
  }

}
