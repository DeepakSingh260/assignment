import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { List } from './Routing/routing';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Admin01:Admin01@cluster0.xwsrdpo.mongodb.net/test')],
  controllers: [AppController , List],
  providers: [AppService],
})
export class AppModule {}
