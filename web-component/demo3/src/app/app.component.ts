import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Bart';
  image = "https://images.dog.ceo/breeds/schipperke/n02104365_9248.jpg";
  message?: string;

  constructor(@Inject(PLATFORM_ID) private platformId: any){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window?.addEventListener('app-dog-event', (val => {
        const response = val as CustomEvent;
        console.log('my val ', response);
        this.message = `Listener message from web component --> ${response.detail.message} ${response.detail.name}`;
      }), true);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window?.removeEventListener('app-dog-event',   (remove => console.log(remove)), true);
    }
  }


}
