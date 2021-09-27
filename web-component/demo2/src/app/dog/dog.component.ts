import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
})
export class DogComponent implements OnInit {
  @Input() name?: string;
  @Input() image?: string;
  @Output() add: EventEmitter<number> = new EventEmitter();

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this._snackBar.open(`${message} ${this.name}`, 'Close');
  }

  addItem() {
    this.add.emit(1);
  }
}
