import { Module } from '@nestjs/common';
import { DonorService } from './services/donor.service';
import { DonorController } from './controllers/donor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonorEntity } from './models/donor.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([DonorEntity])
  ],
  providers: [DonorService],
  controllers: [DonorController]
})
export class DonorModule {}
