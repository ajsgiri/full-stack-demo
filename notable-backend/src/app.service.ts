import { Injectable } from '@nestjs/common';
import { Provider } from './provider-interface';
import { Appointment } from './appointment-interface';

@Injectable()
export class AppService {
  getHello() {
    return { text: 'Hello World Ajay!' };
  }

  private providerList: Provider[] = [
    {
      id: 1,
      name: 'dr 1',
    },
    {
      id: 2,
      name: 'dr 2',
    },
    {
      id: 3,
      name: 'dr 3',
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
    return { providerList : this.providerList};
  }

  getProviderAppointments(providerId: number) {
    const appointments = this.providerAppointments.filter((appointment) => appointment.providerId == providerId)
    return { providerAppointments: appointments}
  }
}
