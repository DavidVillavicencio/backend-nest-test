import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

@Controller() // localhost:3000/
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbManager: DbManagerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('simba')
  getSimba(): string {
    return this.appService.getSimba();
  }

  @Get('starwars')
  getStarWars(): string {
    return this.appService.getStarWars();
  }

  @Get('stich')
  getStich(): string {
    return this.appService.getStich();
  }

  @Get('ratona')
  getRatona(): string {
    return this.appService.getRatona();
  }

  @Get('user')
  getUser(@Query('id') id: number) {
    return this.dbManager.getUser(id);
  }
}
