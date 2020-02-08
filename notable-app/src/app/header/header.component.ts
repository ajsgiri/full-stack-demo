import { Provider } from './../interfaces/provider';
import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  private providerName: string;
  private providerEmail: string
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.currentProvider.subscribe( (provider: Provider) => {
      this.providerName = provider.name;
      this.providerEmail = provider.email;
    });
  }
}
