import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppCatalog, AppRegistryState } from '../states/app-registry.state';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  menus: AppCatalog[] = [];
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.select(AppRegistryState.onApplicationUpdated).subscribe(apps => {
      this.menus = apps;
    })
  }

}
