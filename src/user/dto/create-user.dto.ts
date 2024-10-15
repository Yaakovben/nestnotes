import { IsString,IsEmail, MinLength } from "class-validator"
export class CreateUserDto {
    @IsString()
    @MinLength(5,{message:"password is to shot must be at last 5 chare"})
    @IsEmail({},{message:"Invalid email format"})
    username:string
    password:string
    email:string
}
