import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  notifications = 2;
  notifications2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
