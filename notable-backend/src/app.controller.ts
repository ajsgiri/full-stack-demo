import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Provider }from './provider-interface';
import { Appointment } from './appointment-interface';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('providers')
  getProviders() {
    return this.appService.getProviders();
  }

  @Get('providerAppointments/:providerId')
  getProviderAppointments(@Param() params) {
    return this.appService.getProviderAppointments(params.providerId);
  }
}
