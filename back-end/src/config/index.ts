import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

const configModule = ConfigModule.forRoot({ envFilePath: '.env' });

const sequelizeDBConfig = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  models: [],
  autoLoadModels: true, // создает таблицы на основании наших моделей
});

export default [configModule, sequelizeDBConfig];
