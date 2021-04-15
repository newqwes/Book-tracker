import { UsersService } from './users.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
