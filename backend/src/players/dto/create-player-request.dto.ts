import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";



export class CreatePlayerRequestDto {
    @IsEmail()
    email:string;
    @IsString()
    @IsNotEmpty()
    playerName:string;
    @IsNotEmpty()
    @IsString()
    password:string;
}