import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }
  
  getSimba(): string {
    return 'Hakuna Matata, una forma de ser';
  }

  getStich(): string {
    return 'Ohana significa familia, y la familia nunca te abandona';
  }

  getStarWars(): string {
    return 'Que la fuerza te acompañe';
  }

  getRatona(): string {
    return 'Ratoncita, te amo mucho, eres lo mas hermoso que me ha pasado en la vida y siempre estaré a tu lado ❤️❤️';
  }
}
