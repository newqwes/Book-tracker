import { Module } from '@nestjs/common';

import config from './config';

import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  imports: [...config, UsersModule],
})
export class AppModule {}
