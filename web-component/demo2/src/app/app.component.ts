import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DogsModel} from "./dogs.model";
import {DogApiService} from "./dog-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'angular-web-component';
  dogs$?: Observable<DogsModel[]>
  total: number = 0;

  constructor(private service: DogApiService) {}

  ngOnInit(): void {
    this.dogs$ = this.service.getDogs();
  }

  add(item: number): void {
    this.total += + item;
    this.sendCustomEvent();
  }


  sendCustomEvent(): void {
    const data = {
      totalItem: this.total
    };
    const event = new CustomEvent('app-dog-add-event', {detail: data})
    window.dispatchEvent(event);
  }
}
