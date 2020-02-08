import { Appointment } from './../interfaces/appointment';
import { Provider } from './../interfaces/provider';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {from} from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class NotableApiService {
  private baseURL = 'http://localhost:3000';
  private providerPath = '/provders'
  private providerAppontmentPath = (id) => `/providerAppointments/$(id)`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  private providerList: Provider[] = [
    {
      id: 1,
      name: 'dr 1',
      email: 'dr1@mail.com'
    },
    {
      id: 2,
      name: 'dr 2',
      email: 'dr2@mail.com'
    },
    {
      id: 3,
      name: 'dr 3',
      email: 'dr3@mail.com'
    },
  ];

  private providerAppointments: Appointment[] = [
    {
      providerId: 1,
      appointmentId: 1
    }, {
      providerId: 2,
      appointmentId: 1
    },
    {
      providerId: 2,
      appointmentId: 2
    },
    {
      providerId: 3,
      appointmentId: 1
    },
    {
      providerId: 3,
      appointmentId: 2
    },
    {
      providerId: 3,
      appointmentId: 3
    }
  ]

  getProviders() {
   return from(this.providerList);
   // return this.http.get('http://localhost:3000/providers', this.httpOptions )
  }

  getProviderAppointments(providerId: number) {
    const appointments = this.providerAppointments.filter((appointment) => appointment.providerId == providerId)
    return from(appointments);
    // return this.http.get('localhost:3000/providerAppointments/1', this.httpOptions )
  }
}
