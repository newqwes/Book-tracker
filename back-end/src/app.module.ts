import { Module } from '@nestjs/common';

import config from './config';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@Module({
  controllers: [],
  providers: [],
  imports: [...config, UsersModule, RolesModule],
})
export class AppModule {}
