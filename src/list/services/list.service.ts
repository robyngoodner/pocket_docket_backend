import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult,  } from 'typeorm';

import { DonorEntity } from '../models/list.entity'
import { DonorStatus } from '../models/list.interface'

@Injectable()
export class DonorService {
    constructor(
        @InjectRepository(DonorEntity)
        private readonly donorStatusRepository:Repository<DonorEntity>
    ) {}

    createDonor(donorStatus: DonorStatus): Observable<DonorStatus> {
        return from(this.donorStatusRepository.save(donorStatus));
    }

    getDonor(id: number): Observable<DonorStatus> {
        return from(
            this.donorStatusRepository.findOne({
                where: { id }
            }))
    }

    updateDonor(id: number, donorStatus: DonorStatus): Observable<UpdateResult> {
        return from(this.donorStatusRepository.update(id, donorStatus))
    }

    deleteDonor(id: number): Observable<DeleteResult> {
        return from(this.donorStatusRepository.delete(id));
    }
}
