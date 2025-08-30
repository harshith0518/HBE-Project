import { Injectable, NotFoundException } from '@nestjs/common';
import { console } from 'inspector';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "username": "John Doe",
            "age": 25,
            "role": "ENGINEER",
            "email": "john@gmail.com"
        },
        {
            "id": 2,
            "username": "Jane Smith",
            "age": 22,
            "role": "INTERN",
            "email": "jane@gmail.com"
        },
        {
            "id": 3,
            "username": "Alice Johnson",
            "age": 28,
            "role": "ADMIN",
            "email": "alice@gmail.com",
        },
        {
            "id": 4,
            "username": "Bob Brown",
            "age": 30,
            "role": "ENGINEER",
            "email": "bob@gmail.com"
        },
        {
            "id": 5,
            "username": "Charlie Davis",
            "age": 23,
            "role": "INTERN",
            "email": "charlie@gmail.com"
        }
    ];

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if(role) {
            const allUsers = this.users.filter(user=> user.role == role);
            if(allUsers.length === 0) {
                throw new NotFoundException('No users found');
            }
            return allUsers;
        } else {
            console.log(this.users);
            return this.users;
        }
    };

    findOne(id:number) {
        const user = this.users.find(user => user.id === id);
        if(!user) {
            throw new NotFoundException('user not found');
        }
        return user;
    }

    create(user: CreateUserDTO) {
        const userByHighestId = [...this.users].sort((a,b)=> b.id-a.id)[0];
        const newUser = {
            ...user,
            id:userByHighestId.id + 1
        }
        this.users.push(newUser);
        console.log(this.users);
        return newUser;
    }

    update(id:number,updateUser:UpdateUserDTO) {
        this.users = this.users.map(user=> {
                        if(user.id === id) {
                            return {...user,...updateUser}; // if match then overwrite with new-data
                        } return user;
                    });
        console.log(this.users);
        return this.findOne(id);
    }

    delete(id:number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user=> user.id!== id);
        return removedUser;
    }


}
