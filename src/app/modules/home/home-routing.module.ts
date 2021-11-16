import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngxs/store';
import { Register } from 'src/app/states/app-registry.state';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  constructor(store: Store) {
    store.dispatch(new Register({routerLink: "home", displayName:"Home"}));
  }
}
