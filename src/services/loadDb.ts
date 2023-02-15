import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { response } from "express";
import { Model,FilterQuery } from "mongoose";
import { brand_sales_daily }  from "./schemaList";
import { ListDocument } from "./schemaList";

@Injectable()
export class getListService{
    constructor(@InjectModel(brand_sales_daily.name) private listModel:Model<ListDocument>){

    }

    async create(item:brand_sales_daily):Promise<brand_sales_daily>{
        const newItem = new this.listModel(item);
        return newItem.save();
    }

    async find(listFilterQuery:FilterQuery<brand_sales_daily>):Promise<brand_sales_daily[]>{
        const response = await this.listModel.find(listFilterQuery)
        return response
    }   
}