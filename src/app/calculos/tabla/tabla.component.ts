import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  nume1:number;
  resul:string[]=[];

  constructor() { }

  multipli():void{
    let resul:string[]=[];
    let i:number=1;
    while(i<=10){
      resul.push(this.nume1+" x "+i+" = "+(this.nume1*i));
      this.resul=resul;
      i++;
    }
  }

  ngOnInit(): void {
  }

  

}
