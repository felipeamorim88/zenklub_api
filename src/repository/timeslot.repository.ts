import mysqlDataSource from "src/datasource/mysql-datasource";
import { Timeslot } from "src/entity/timeslot.entity";

export const TimeslotRepository = mysqlDataSource.getRepository(Timeslot)