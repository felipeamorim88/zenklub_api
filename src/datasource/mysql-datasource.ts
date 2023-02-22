import { DataSource } from "typeorm"
require('dotenv').config();

const mysqlDataSource = new DataSource({
    "type": "mysql",
    "host":process.env.MYSQL_HOST,
    "port": parseInt(process.env.MYSQL_PORT),
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "entities": [__dirname + '/../**/*.entity.{js,ts}'],
    "synchronize": true,
    "migrationsRun": true

})
mysqlDataSource.initialize()
export default mysqlDataSource