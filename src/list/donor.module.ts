import { Module } from '@nestjs/common';
import { DonorService } from './services/list.service';
import { DonorController } from './controllers/list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonorEntity } from './models/list.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([DonorEntity])
  ],
  providers: [DonorService],
  controllers: [DonorController]
})
export class DonorModule {}
