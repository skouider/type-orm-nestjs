/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {

  constructor(@InjectRepository(Item) private readonly itemRepo:Repository<Item>){

  }

  create(createItemDto: CreateItemDto) {
    return this.itemRepo.save(createItemDto);
  }

  findAll() {
    return this.itemRepo.find();
  }

  findOne(id: number) {
    return this.itemRepo.findOne({
      where:{id}
    });
  }

async  update(id: number, updateItemDto: UpdateItemDto) {
    
  const item = await this.itemRepo.findOneBy({id})
  console.log(item.id);
  
  item.name = updateItemDto.name
  console.log(item.name);
  
    return this.itemRepo.save(item);
  }

 async remove(id: number) {
    return this.itemRepo.delete(id);
  }
}
