import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dto/CreateUser.dto';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async create(@Body() body: CreateUser) {
    this.userRepository.save(body);
    return body;
  }

  @Get()
  async list() {
    return this.userRepository.list();
  }
}
