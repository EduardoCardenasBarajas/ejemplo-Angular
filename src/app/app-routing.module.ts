import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { ProductlistComponent } from './productos/productlist/productlist.component';

const routes: Routes = [
  {path:'', component:  ProductlistComponent},
  {path:'OperaBas',component: OperasBasComponent},
  {path:'Tabla', component: TablaComponent},
  {path:'Cinepolis', component: CinepolisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
