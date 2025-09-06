import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { UserAuthResponse } from './interfaces/user-response.dto';
import { User } from './entities/user.entity';
import { hash } from 'bcrypt';



@Injectable()
export class UserService {

  constructor(private readonly userRepository:UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await hash(createUserDto.password,10);
    return this.userRepository.createOne(createUserDto);
  }


  async getAuthResponse(id:number) :Promise<UserAuthResponse>{
    const user = await this.userRepository.findOneById(id);
    if(!user) {
      throw new NotFoundException('did not find the user.')
    }
    return this.buildAuthResponse(user);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOneById(id: number) {
    return this.userRepository.findOneById(id);
  }

  async findOneByEmail(email:string):Promise<User> {
    const user = await this.userRepository.findOneByEmail(email);
    if(!user) {
      throw new NotFoundException('Invalid email try a registered one.')
    }
    return user;
  }

  update(id: number, user: User) {
    return this.userRepository.updateOne(user);
  }

  async updateRefreshToken(id: number, hashedToken: string):Promise<UserAuthResponse> {
    await this.userRepository.updateRefreshToken(id,hashedToken);
    const user = await this.userRepository.findOneById(id);
    if(!user) {
      throw new NotFoundException('invalid user to generate the UserResponse interface from User module.')
    }
    return this.buildAuthResponse(user);
  }

  async removeRefreshToken(id:number) {
    await this.userRepository.updateRefreshToken(id,'');
  }

  removeById(id: number) {
    return this.userRepository.deleteOne({id:id});
  }
  
  async findOneForAuthById(id:number): Promise<UserAuthResponse>{
    const user = await this.userRepository.findOneById(id);
    if(!user) {
      throw new NotFoundException('did not find the user.')
    }
    return this.buildAuthResponse(user);
  }

  private buildAuthResponse(user:User):UserAuthResponse{
    return {
      id:user.id,
      role:user.role,
      refresh_token_hash:user.refresh_token_hash,
    }
  }
}
