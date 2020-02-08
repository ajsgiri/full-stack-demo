import { NotableApiService } from './services/notable-api.service';
import { Appointment } from './interfaces/appointment';
import { Provider } from './interfaces/provider';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _activeProvider;
  private _activeProviderAppointmnets;

  constructor(private notable: NotableApiService) {
    this._activeProvider = new BehaviorSubject<Provider>({
      id: 0,
      name: 'defualt',
      email: 'default@mail.com'
    })
    this._activeProviderAppointmnets = new BehaviorSubject<Appointment[]>([])
   }

   get currentProvider(): Observable<Provider> {
     return this._activeProvider
   }

   get currentProviderAppointments(): Observable<Appointment[]> {
    return this._activeProviderAppointmnets
  }

  updateCurrentProviderAndAppointments(provider: Provider) {
    this._activeProvider.next(provider);
    const newAppointmentList = this.notable.getProviderAppointments(provider.id);
    this._activeProviderAppointmnets.next(newAppointmentList);
  }
}
