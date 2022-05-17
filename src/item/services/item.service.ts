import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult,  } from 'typeorm';

import { ItemEntity } from '../models/item.entity'
import { Item } from '../models/item.interface'

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepository:Repository<ItemEntity>
    ) {}

    createItem(item: Item): Observable<Item> {
        return from(this.itemRepository.save(item));
    }

    getItems(id: number){
        console.log('item service line 21', id)
        return (
            this.itemRepository.find({ 
                where: {id: id},
                //select: ['body', 'complete', 'id', 'list', 'createdAt']
            })
            )
    }

    updateItem(id: number, item: Item): Observable<UpdateResult> {
        console.log('item: ',item)
        return from(this.itemRepository.update(id, item))
    }

    deleteItem(id: number): Observable<DeleteResult> {
        return from(this.itemRepository.delete(id));
    }
}
