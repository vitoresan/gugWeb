import { Component } from '@angular/core';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dataFixa = "06/10/2018";
  title = 'Bandi i Teté';
  dataSelecionada: string;
  days: number;

  imagens: any = {
    path: "../assets/img1.jpg",
    data: "04/02/2019"
  }

  constructor(
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>) { }

  setToday() {
    this.dataSelecionada = this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
    this.days = 55
  }


}