
import { Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Response ,Request} from 'express';
import { ListServices } from 'src/services/list.service';
@Controller('List')
export class ListController    {

    constructor(private listServices:ListServices){}
  @Get("getList")
  async getAll(@Res () res:Response){
    const response = await this.listServices.getList()
    res.status(HttpStatus.OK).json(response)
    //
    // return response
    // return 'This action returns all the items';
  }

  @Post("postList")
  async addItem(@Res() res:Response ,@Req() req:Request , @Param('params') param){
    // const request = req.params
    console.log("params",req.query)
    const response  = await this.listServices.create(req.query)
    res.send()
  }
}
