import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-side',
  templateUrl: './mode-side.component.html',
  styleUrls: ['./mode-side.component.scss']
})
export class ModeSideComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

  log(state: any): void{
    console.log(state);
  }
}
