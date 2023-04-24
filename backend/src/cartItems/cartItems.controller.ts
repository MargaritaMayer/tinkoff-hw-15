// import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

// @Controller()
// export class CartItemsController {
//   constructor(private dbService: InMemoryDBService<CartItemsEntity>) {
//     dbService.create({
//         title: 'hi',
//         price: 1390,
//         imgPath: 'assets/img/store-item-1.jpg',
//         count: 10,
//         id: '2',
//     });
//   }

//   @Get()
//   getAll(): CartItemsEntity[] {
//     return this.dbService.getAll();
//   }
  
//   @Post()
//   create(@Body() dto: Partial<CartItemsEntity>): CartItemsEntity {
//     return this.dbService.create(dto);
//   }


// }