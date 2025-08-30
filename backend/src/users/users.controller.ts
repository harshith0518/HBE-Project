import { Body, Controller, Delete, Get, Param , ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users') // our-domain/users  --> defining the route for this controller 
export class UsersController {

    constructor(private readonly userService:UsersService) {}
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */
    @Get()  // GET /users or /users?role=value&age=value
    findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN') { // we can use Query also here to filter the data
        return this.userService.findAll(role);
    };
    @Get(':id') // GET /users/:id
    // parseIntPipe will convert the string to number and if not possible then it will throw an error
    findOne(@Param('id',ParseIntPipe) id:number) {
        return this.userService.findOne(id); // +id to convert string to number
    }

    @Post() // POST /users 
    create(@Body(ValidationPipe) user: CreateUserDTO){
        return this.userService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id:string,@Body(ValidationPipe) updateUser:UpdateUserDTO) {
        return this.userService.update(+id,updateUser);
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id',ParseIntPipe) id:number) {
        return this.userService.delete(id);
    }
}
