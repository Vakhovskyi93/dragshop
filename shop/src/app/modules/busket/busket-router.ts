import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { BusketComponent } from "./busket/busket.component";

const routes: Routes = [
  
  {
    path: '',
    component: BusketComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusketRouterModule { }
