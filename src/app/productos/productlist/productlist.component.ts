import { Component, OnInit } from '@angular/core';
import{ IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  imageWidth:number=150;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  
 

  productos: IProducto[]=[
    {
      "productoId":1,
      "modelo":'sentra',
      "descripcion":"auto 4 puertas",
      "marca":'Nissan',
      "year":"febrero 3 2020",
      "precio":250000,
      "puntos":3.3,
      "ImagenUrl":"https://img.automexico.com/crop/840x640/2020/07/07/rkwP8Fam/nissan-sentra-2020-1280-11-059a.jpg"
    },
    {
      "productoId":2,
      "modelo":'Rio',
      "descripcion":"auto 4 puertas",
      "marca":'Kia',
      "year":"marzo 5 2021",
      "precio":490000,
      "puntos":4.3,
      "ImagenUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2018_Kia_Rio_EX_-_Side.jpg/1200px-2018_Kia_Rio_EX_-_Side.jpg"
    },
    {
      "productoId":3,
      "modelo":'Altima',
      "descripcion":"auto 4 puertas",
      "marca":'Nissan',
      "year":"july 10 2021",
      "precio":560000,
      "puntos":7.3,
      "ImagenUrl":"https://img.remediosdigitales.com/9322ca/nissan-altima-2021-precio-mexico_/1366_2000.jpg"
    },
  ]

  constructor() { }

  ShowImagen():void{
    this.muestraImg= !this.muestraImg;


  }

  ngOnInit(): void {
  }

}
