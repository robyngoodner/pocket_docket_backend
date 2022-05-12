import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

import { ListService } from '../services/list.service'
import { List } from '../models/list.interface'

@Controller('list')
export class ListController {
    constructor(private listService: ListService){}

    @Post('new')
    create(@Body() list: List): Observable<List> {
        console.log('list controller creating new list line 14')
        return this.listService.createList(list)
    }

    @Get (':id')
    findAll(@Param('user') id: number) {
        return this.listService.getLists(id)
    }

    @Put(':id/edit')
    update(
        @Param('id') id: number,
        @Body() list: List
    ):Observable<List> {
        return this.listService.updateList(id)
    }

    @Delete(':id/delete')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult>  {
        return this.listService.deleteList(id)
    }
}
