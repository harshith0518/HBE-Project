import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDTO {

    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @IsEnum(["INTERN" , "ENGINEER" , "ADMIN"], {
        message:"Role must be of those 3"
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";
    @IsInt()
    age: number;
}

