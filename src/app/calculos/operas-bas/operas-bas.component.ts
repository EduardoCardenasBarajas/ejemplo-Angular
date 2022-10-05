import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1:string='';
  num2:string='';

  resultado:number=0;
  operacion:string='';

  constructor() { }

  ngOnInit(): void {
    
  }
  sumar():void{
    //this.resultado= parseInt(this.num1)+parseInt(this.num2);
    if(this.operacion=="suma"){
      this.resultado= parseInt(this.num1)+parseInt(this.num2);
    }
    if(this.operacion=="resta"){
      this.resultado= parseInt(this.num1)-parseInt(this.num2);
    }
    if(this.operacion=="multiplicacion"){
      this.resultado= parseInt(this.num1)*parseInt(this.num2);
    }
    if(this.operacion=="division"){
      this.resultado= parseInt(this.num1)/parseInt(this.num2);
    }
    
  }
  operaciones():void{

  }

}
