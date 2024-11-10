import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Chao bootcamp ya casi terminamos!';
  }
}
