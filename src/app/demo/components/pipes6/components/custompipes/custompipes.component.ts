import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.scss']
})
export class CustompipesComponent implements OnInit {

  nb : number = 0
  monPow : number = 0

  constructor() { }

  ngOnInit(): void {
    //mon user veux quelques chose de perso...
    this.monPow = 7 //par exemple
  }

}
