import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from './controllers/item.controller';
import { ItemEntity } from './models/item.entity';
import { ItemService } from './services/item.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([ItemEntity])
      ],
      providers: [ItemService],
      controllers: [ItemController]

})
export class ItemModule {}
