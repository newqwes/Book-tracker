import { Module } from '@nestjs/common';

import config from './config';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';

@Module({
  controllers: [],
  providers: [],
  imports: [...config, UsersModule, RolesModule, AuthModule, PostsModule, FilesModule],
})
export class AppModule {}
