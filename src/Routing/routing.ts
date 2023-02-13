
import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
@Controller('List')
export class List    {
  @Get("getList")
  getAll(@Res () res:Response){
    res.status(HttpStatus.OK).json(["key","Value"])
    // return 'This action returns all the items';
  }

  @Post("postList")
  addItem(@Res() res:Response){
    res.status(HttpStatus.CREATED).send();
  }
}
