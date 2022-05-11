import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

import { DonorService } from '../services/donor.service'
import { DonorStatus } from '../models/donor.interface'

@Controller('donor')
export class DonorController {
    constructor(private donorService: DonorService){}

    @Post()
    create(@Body() donorStatus: DonorStatus): Observable<DonorStatus> {
        return this.donorService.createDonor(donorStatus)
    }

    @Get ('/:id')
    findOne(@Param('id') id: number) {
        return this.donorService.getDonor(id)
    }

    @Put('edit/:id')
    update(
        @Param('id') id: number,
        @Body() donorStatus: DonorStatus
    ):Observable<UpdateResult> {
        return this.donorService.updateDonor(id, donorStatus)
    }

    @Delete('delete/:id')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult>  {
        return this.donorService.deleteDonor(id)
    }
}
