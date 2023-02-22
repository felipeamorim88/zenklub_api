import mysqlDataSource from "src/datasource/mysql-datasource";
import { Session } from "src/entity/session.entity";

export const SessionRepository = mysqlDataSource.getRepository(Session)