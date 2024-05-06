/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn({type:"bigint"})
    id:number;
    @Column({unique:true})
    username:string;
    @Column()
    password:string;
    @CreateDateColumn()
    createdAt:Date;
    @Column({nullable:true})
    authStrategie:string;
}