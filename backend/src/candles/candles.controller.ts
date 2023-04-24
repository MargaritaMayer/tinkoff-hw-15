import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CandlesEntity } from '../entity/candles.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Controller()
export class CandlesController {
    @InjectRepository(CandlesEntity)
    protected readonly entitiesRepository: Repository<CandlesEntity>;

    @Get()
    getAll(): Promise<CandlesEntity[]> {
        return this.entitiesRepository.find();
    }
}



// {
//     dbService.create({
//         title: 'CONGRATS',
//         price: 1390,
//         imgPath: 'assets/img/store-item-1.jpg',
//         isInStock: true,
//     });
//     dbService.create({
//         title: 'BIRTHDAY CAKE',
//         price: 1590,
//         imgPath: 'assets/img/store-item-2.jpg',
//         isInStock: true,
//     });
//     dbService.create({
//         title: 'NAMASTE',
//         price: 1290,
//         imgPath: 'assets/img/store-item-3.jpg',
//         isInStock: true,
//     });
//     dbService.create({
//         title: 'CANT ADULT',
//         price: 1390,
//         imgPath: 'assets/img/store-item-4.jpg',
//         isInStock: true,
//     });
//     dbService.create({
//         title: 'LOVE YOU MORE ICE CREAM',
//         price: 2090,
//         imgPath: 'assets/img/store-item-5.jpg',
//         isInStock: false,
//     });
//     dbService.create({
//         title: 'I SEE IT, I LIKE IT',
//         price: 1690,
//         imgPath: 'assets/img/store-item-6.jpg',
//         isInStock: true,
//     });
//     dbService.create({
//         title: 'YOU GROW GIRL',
//         price: 1290,
//         imgPath: 'assets/img/store-item-7.jpg',
//         isInStock: true,
//     });

//   }