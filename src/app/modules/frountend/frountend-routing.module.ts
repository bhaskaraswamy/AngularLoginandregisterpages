import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainIndexComponent } from './components/main-index/main-index.component';
import { MainComponent } from './components/main/main.component';
import { ProductCustomizationComponent } from './components/product-customization/product-customization.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[
      {
        path:"home",
        component:MainIndexComponent
      },
      {
        path:`productCustomization/:id`,
        component:ProductCustomizationComponent
      },
      {
        path:"",
        redirectTo:"/store/home",
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrountendRoutingModule { }
