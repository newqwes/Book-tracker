import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { User } from 'src/users/users.model';
import { Role } from './../roles/roles.model';

const configModule = ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
});

const sequelizeDBConfig = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  models: [User, Role], // !Не забывать добовлять все модели таблиц
  autoLoadModels: true, // дает возможность создания таблицы на основании наших моделей
});

export default [configModule, sequelizeDBConfig];
