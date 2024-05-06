/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Item,Listing])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
