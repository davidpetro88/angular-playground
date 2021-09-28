import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'card-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
})
export class DogComponent implements OnInit, OnDestroy {
  @Input() name?: string;
  @Input() image?: string;
  @Input() token?: string;
  star: boolean = false;

  constructor(private _snackBar: MatSnackBar, private elementRef:ElementRef) {
    this.name = this.elementRef.nativeElement.getAttribute('name');
    this.image = this.elementRef.nativeElement.getAttribute('image');
  }

  ngOnInit(): void {
    window.addEventListener('app-dog-add-stars', (val => {
      const response = val as CustomEvent;
      console.log('my event listener -->',  response.detail?.star)
      this.star = response.detail?.star;
    }), true);
  }

  sendCustomEvent(phrase: string): void {
    const data = {
      message: phrase,
      name: this.name
    };
    const event = new CustomEvent('app-dog-event', {detail: data})
    window.dispatchEvent(event);
  }

  openSnackBar(message: string) {
    const sendMessage = `${message} ${this.name}`
    this.sendCustomEvent(message);
    this._snackBar.open(sendMessage, 'Close');
  }

  ngOnDestroy(): void {
    window.removeEventListener('app-dog-add-stars',   (remove => console.log(remove)), true);
  }

}
