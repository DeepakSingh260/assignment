import {Prop , Schema ,  SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose';

export type ListDocument = HydratedDocument<brand_sales_daily>;

@Schema()
export class brand_sales_daily{

@Prop()
date:String

@Prop()
brand:String

@Prop()
transactionType:String

@Prop()
totalOrders:number

@Prop()
totalOrderValue:number

@Prop()
grossMarginPercentage:number

@Prop()
createdAt:String 

@Prop()
updatedAt : String 



}

export const brand_sales_daily_schema = SchemaFactory.createForClass(brand_sales_daily);