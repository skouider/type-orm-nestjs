/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type:"mysql",
    host:"localhost",
    username:"root",
    password:"admin",
    database:"nestjs-typeorm-mysql",
    entities:['dist/../*.entities.ts'],
    migrations:['../db/migrations/*.ts']

}

const datasource = new DataSource(dataSourceOptions);
export default datasource;
