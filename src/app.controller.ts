import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';
import { join } from 'path';

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
  getRatona(@Res() res: Response) {
    // ✅ Ruta al archivo dentro de la carpeta 'public'
    const filePath = join(__dirname, '..', 'public', 'ratoncita.html');
    return res.sendFile(filePath);
  }

  @Get('user')
  getUser(@Query('id') id: number) {
    return this.dbManager.getUser(id);
  }
}
