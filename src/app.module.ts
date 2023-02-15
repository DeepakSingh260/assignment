import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './Routing/routing';
import { MongooseModule } from '@nestjs/mongoose';
import { brand_sales_daily, brand_sales_daily_schema } from './services/schemaList';
import { ListServices } from './services/list.service';
import { getListService } from './services/loadDb';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Admin01:Admin01@cluster0.xwsrdpo.mongodb.net/test') , MongooseModule.forFeature([{name:brand_sales_daily.name , schema:brand_sales_daily_schema}]) ],
  controllers: [AppController , ListController],
  providers: [AppService  , ListServices  ,getListService ],
})
export class AppModule {}
