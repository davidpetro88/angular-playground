import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarCustomComponent} from "./snack-bar-custom/snack.bar.custom.component";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string): void {
    let snackBarRef = this.snackBar.open(message, action);
    snackBarRef.afterDismissed().subscribe(() => console.log('The snack-bar was dismissed'));
    snackBarRef.afterOpened().subscribe(() => console.log('The snack-bar was open'));
    snackBarRef.onAction().subscribe(() => console.log('The snack-bar action was triggered'))
  }

  openCustomSnackar(): void {
    this.snackBar.openFromComponent(SnackBarCustomComponent, {duration: 2000})
  }
}
