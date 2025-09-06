import { IsAlphanumeric, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @IsString()
    mobile:string;
    @IsNotEmpty()
    @IsAlphanumeric()
    name:string;
    @IsNotEmpty()
    @IsString()
    password:string;
}
