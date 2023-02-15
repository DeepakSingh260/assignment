import { Injectable } from "@nestjs/common";
import { getListService } from "./loadDb";

@Injectable()
export class ListServices{

    constructor(private loadDb: getListService){}

    async getList(){
        const response = await  this.loadDb.find({})
        return response
    }

    create(payload:any){
        return this.loadDb.create(payload)
    }

}