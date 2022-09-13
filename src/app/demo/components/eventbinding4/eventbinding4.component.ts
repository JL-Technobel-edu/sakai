import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding4',
  templateUrl: './eventbinding4.component.html',
  styleUrls: ['./eventbinding4.component.scss']
})
export class Eventbinding4Component implements OnInit {

  nombre : number = 0
  message : string = "none"
  keyPressed : any = undefined

  constructor() { }

  ngOnInit(): void {
  }

  incrementNumber(){
    this.nombre++
  }


  chippoteEvent(event : PointerEvent, monMessage : string){
    console.log(event)
    this.message = event.type;
    
  }
}
