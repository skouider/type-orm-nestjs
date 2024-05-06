/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Listing } from "./listing.entity";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    public:boolean;
    @OneToMany(()=>Listing, (listing)=>listing.item)
    listings:Listing[]
    
    constructor(item:Partial<Item>){
        Object.assign(this,item);
    }
}
