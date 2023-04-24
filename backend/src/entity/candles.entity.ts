import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('candles')
export class CandlesEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @Column({
        type: 'character varying',
        length: 255,
    })
    title: string;

    @Column({
        type: 'bigint' 
    })
    price: number;

    @Column({
        type: 'character varying',
        length: 255,
        nullable: true,
    })
    img_path: string | null;
}