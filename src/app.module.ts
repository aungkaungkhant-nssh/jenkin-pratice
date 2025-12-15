import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-process/user/user.module';
import { Databases } from 'database';

@Module({
  imports: [
    UserModule,
    ...Databases
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
