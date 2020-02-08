import { StoreService } from './../store.service';
import { Provider } from './../interfaces/provider';
import { Component, OnInit } from '@angular/core';
import { NotableApiService } from "../services/notable-api.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  private providers: Provider[];
  constructor(
    private notable: NotableApiService,
    private store: StoreService,
    ) {
    this.providers = [];
  }

  ngOnInit() {
    this.notable.getProviders().subscribe(provider => {
      console.log(provider)
      this.providers.push(provider)
    });
  }

  onClickProvider(provider: Provider) {
    this.store.updateCurrentProviderAndAppointments(provider)
  }

}

