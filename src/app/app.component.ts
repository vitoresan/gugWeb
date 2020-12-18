import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Artes e peripécias do BobGu   g";
  images = [944, 1011, 984, 971].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

}