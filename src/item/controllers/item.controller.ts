import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

import { ItemService } from '../services/item.service'
import { Item } from '../models/item.interface'

@Controller('donor')
export class ItemController {
    constructor(private itemService: ItemService){}

    @Post()
    create(@Body() item: Item): Observable<Item> {
        return this.itemService.createItem(item)
    }

    @Get ('/:id')
    findOne(@Param('id') id: number) {
        return this.itemService.getItem(id)
    }

    @Put('edit/:id')
    update(
        @Param('id') id: number,
        @Body() item: Item
    ):Observable<UpdateResult> {
        return this.itemService.updateItem(id, item)
    }

    @Delete('delete/:id')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult>  {
        return this.itemService.deleteItem(id)
    }
}
