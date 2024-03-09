import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/shopwindow/shopwindow.module').then(mod => mod.ShopwindowModule),
      },
      {
        path: 'busket',
        loadChildren: () => import('./modules/busket/busket.module').then(mod => mod.BusketModule),
      },
];
