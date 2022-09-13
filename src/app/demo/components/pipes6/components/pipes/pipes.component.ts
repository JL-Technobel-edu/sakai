import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  megaImportantTitle : string = ""
  endDate : Date = new Date()
  pricePromo : number = 0

  testJsonPipe : any

  constructor() { }

  ngOnInit(): void {
    this.megaImportantTitle = "En ce moment, Pipes fait fureur"
    this.endDate = new Date()
    this.pricePromo = 150.04015

    this.testJsonPipe = document
  }

}
