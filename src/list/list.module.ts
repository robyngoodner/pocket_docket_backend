import { Module } from '@nestjs/common';
import { ListService } from './services/list.service';
import { ListController } from './controllers/list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListEntity } from './models/list.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([ListEntity])
  ],
  providers: [ListService],
  controllers: [ListController]
})
export class ListModule {}
