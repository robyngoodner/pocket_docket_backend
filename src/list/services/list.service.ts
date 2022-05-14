import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult,  } from 'typeorm';

import { ListEntity } from '../models/list.entity'
import { List } from '../models/list.interface'

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(ListEntity)
        private readonly listRepository:Repository<ListEntity>
    ) {}

    createList(list: List): Observable<List> {
        const { user, title, description } = list
        console.log("list.service on back end creating new list: ",list)
        return from(this.listRepository.save({user, title, description})).pipe(
            map((list: List) => {
                return list
            })
        );
    }

    getLists(id) {
        console.log("list service getLists line 27 id: ", id)
        return (
            this.listRepository.find({
                where: {user: id},
                // select: ['title', 'description', 'id', 'user'],
            }))
    }

    getList(id) {
        // const { id } = id
        console.log("getlist id: ",id)
        return (
            this.listRepository.find({ 
                where: {id : id},
                relations: ["items"]})
        )
    }

    updateList(id: number): Observable<List> {
        return from(
            this.listRepository.save({
            id, 
            select: ['title', 'description']
        }))
    }

    deleteList(id: number): Observable<DeleteResult> {
        return from(this.listRepository.delete(id));
    }
}
