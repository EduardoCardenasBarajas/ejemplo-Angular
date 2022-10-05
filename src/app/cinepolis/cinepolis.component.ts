import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  nom:string='';
  canti:number;
  cantii:number =0;
  bole:number;
  tarjeta:string='';
  total:number=0;
  costo:number=12;
  mensaje:string='';


  constructor() { }

calcular():void{
  let checar:number;
  checar=(this.bole/this.canti);
  if(checar>7){
    this.mensaje="Solo se pueden comprar 7 boletas por comprador";
    this.bole=0;
    this.total=0;
    
  }
  else{
    this.mensaje='';
    if(this.bole>=6 && this.tarjeta=="no"){
      this.total=(this.bole*this.costo) - ((this.bole*this.costo)*0.15);
    }

    else if (this.bole>=6 && this.tarjeta=="si"){
      this.total = (this.bole*this.costo) - ((this.bole*this.costo)*0.15);
      this.total = this.total - (this.total*0.10);
    /*   this.total=((this.bole*this.costo)*0.15)*0.10; */
    }

    else
    if((this.bole<=5 && this.bole>=3) && this.tarjeta=="no" ){
      this.total = (this.bole*this.costo) - ((this.bole*this.costo)*0.10);
    }
    else
    if((this.bole<=5 && this.bole>=3) && this.tarjeta=="si" ){
      this.total = (this.bole*this.costo) - ((this.bole*this.costo)*0.10);
      this.total = this.total - (this.total*0.10);
    }

    else
    if((this.bole<=2 && this.bole>=1) &&this.tarjeta=="no" ){
      this.total=(this.bole*this.costo);
    }
    else
    if((this.bole<=2 && this.bole>=1) &&this.tarjeta=="si" ){
      this.total=(this.bole*this.costo) - (this.bole*this.costo)*0.10;
    }
  }
  

}
cancelar():void{
  this.nom='';
  this.canti=null;
  this.bole=null;
  this.total=0;
  
}

  ngOnInit(): void {
  }

}
