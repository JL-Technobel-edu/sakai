import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes6',
  templateUrl: './pipes6.component.html',
  styleUrls: ['./pipes6.component.scss']
})
export class Pipes6Component implements OnInit {

  megaImportantTitle : string = ""
  endDate : Date = new Date()
  pricePromo : number = 0

  testJsonPipe : any

  constructor() { }

  ngOnInit(): void {
    this.megaImportantTitle = "En ce moment, super promos sur les formations"
    this.endDate = new Date()
    this.pricePromo = 150.04015

    this.testJsonPipe = document
  }
}
