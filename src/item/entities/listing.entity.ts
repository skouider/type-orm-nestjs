/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";

@Entity()
export class Listing{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    description:string;
    @Column()
    rating:number;
    @ManyToOne(()=>Item, (item)=>item.listings)
    item: Item;
    
    constructor(listing:Partial<Listing>){
        Object.assign(this,listing)
    }
    
}