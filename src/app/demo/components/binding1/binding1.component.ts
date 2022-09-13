import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding1',
  templateUrl: './binding1.component.html',
  styleUrls: ['./binding1.component.scss']
})
export class Binding1Component implements OnInit {

  messageIntro : string = ""

  constructor() { }

  ngOnInit(): void {
    this.messageIntro = "Bonjour à tous"
  }

}
