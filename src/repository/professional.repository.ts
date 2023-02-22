import mysqlDataSource from "src/datasource/mysql-datasource";
import { Professional } from "src/entity/professional.entity";

export const ProfessionalRepository = mysqlDataSource.getRepository(Professional)