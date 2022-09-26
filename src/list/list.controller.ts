import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateItemDto } from './dto/create-item.dto';
import { IItem } from './interfaces/item.interface';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private listService: ListService) {}

  @Post()
  async create(@Body() createItem: CreateItemDto) {
    this.listService.create(createItem);
    return createItem;
  }

  @Get()
  async findAll(): Promise<IItem[]> {
    return this.listService.findAll();
  }
}
