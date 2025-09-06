import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Public } from 'src/auth/decorators/public..decorator';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto):Promise<User> {
    return this.userService.create(createUserDto);
  }
  
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() user: User) {
    return this.userService.update(id, user);
  }

  @Get(':id')
  get(@Param('id') id: number, @Body() user: User) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.removeById(id);
  }

}
