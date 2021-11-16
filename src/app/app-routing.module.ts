import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngxs/store';
import { ContainerComponent } from './container/container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Register } from './states/app-registry.state';

const routes: Routes = [
  
  {
    path: '',
    component: ContainerComponent, 
    children:[
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((home) => home.HomeModule),
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo:'404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(store: Store){
    store.dispatch(new Register({ routerLink: "404", displayName: "Not Found" }));
  }
}
