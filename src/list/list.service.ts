import { Injectable } from '@nestjs/common';

import { IItem } from './interfaces/item.interface';

@Injectable()
export class ListService {
  private readonly itens: IItem[] = [];

  create(item: IItem) {
    this.itens.push(item);
  }

  findAll(): IItem[] {
    return this.itens;
  }
}
