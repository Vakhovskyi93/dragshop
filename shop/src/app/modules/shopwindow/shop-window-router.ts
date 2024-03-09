import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ShopingWindowComponent } from "./shoping-window/shoping-window.component";

const routes: Routes = [
    {
        path: '',
        component: ShopingWindowComponent,
        pathMatch: 'full',
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopwindowRouterModule { }
