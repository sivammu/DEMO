import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'about', component:AboutComponent},
    {path:'products', component:ProductsComponent},
    {path:'product/:id', component:ProductsComponent}
]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
