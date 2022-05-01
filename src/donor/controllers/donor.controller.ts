import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

import { DonorService } from '../services/donor.service'
import { DonorStatus } from '../models/donor.interface'

@Controller('user')
export class DonorController {
    constructor(private donorService: donorService){}

    @Post()
    create(@Body() donorStatus: DonorStatus): Observable<DonorStatus> {
        return this.donorService.createUser(donorStatus)
    }

    @Get()
    findAll():Observable<DonorStatus[]> {
        return this.donorService.findAllUsers();
    }

    @Put('edit/:id')
    update(
        @Param('id') id: number,
        @Body() donorStatus: DonorStatus
    ):Observable<UpdateResult> {
        return this.donorService.updateUser(id, donorStatus)
    }

    @Delete(':id')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult>  {
        return this.donorService.deleteUser(id)
    }
}
