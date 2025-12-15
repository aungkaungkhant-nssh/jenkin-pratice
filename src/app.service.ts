import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await argon.verify('hello', 'hello');
    return 'hello';
  }
}
