import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-snackbar',
  template: `<span style="color:orange">Custom snackBar</span>`
})
export class SnackBarCustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
