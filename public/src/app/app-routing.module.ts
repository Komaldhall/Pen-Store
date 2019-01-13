import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllProductComponent } from './show-all-product/show-all-product.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: '' , pathMatch:'full', redirectTo:'products'},
  { path:'products', component:ShowAllProductComponent, children:[
  { path:'new',component:AddNewProductComponent},
  { path:':id', component:EditProductComponent},
  // { path:':id', component:ShowOneProductComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
