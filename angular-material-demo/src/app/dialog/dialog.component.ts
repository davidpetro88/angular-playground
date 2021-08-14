import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'David'}});
    dialogRef.afterClosed().subscribe(value => {
      console.log('Dialog result:', value);
    });
  }
}
