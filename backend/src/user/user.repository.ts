import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";


@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly UserRepository:Repository<User>
    ) {}

    async createOne(createUserDto:CreateUserDto) {
        
        const user = this.UserRepository.create(createUserDto)
        return await this.UserRepository.save(user); // saves into db
    }

    findAll() : Promise<CreateUserDto[]> {
        return this.UserRepository.find();
    }

    findOneById(id:number) {
        return this.UserRepository.findOne({
            where: {id},
        })
    }

    findOneByEmail(email:string) {
        return this.UserRepository.findOne({
            where : {email},
        });
    }

    async updateOne(user: User) {
        const { id, ...updateData } = user;
        if(!id) {
            throw new NotFoundException('player has invalid id:Cannot be updated')
        }
        await this.UserRepository.update(id, updateData);
        return this.UserRepository.findOne({ where: { id } });
    }

    async updateRefreshToken(id: number, hashedToken: string) {
        await this.UserRepository.update(id, { refresh_token_hash: hashedToken });
    }

    async deleteOne(deleteUserDto: Partial<User>) {
        if (!deleteUserDto || Object.keys(deleteUserDto).length === 0) {
            throw new Error("At least one field must be provided to delete a user");
        }
        return await this.UserRepository.delete(deleteUserDto);
    }
}