import { IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    // @IsString()
    // @IsNotEmpty()
    // code: string;
  
    @IsString()
    @IsNotEmpty()
    nom: string;
  
    @IsString()
    @IsNotEmpty()
    prenom: string;
  
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
 
    // role: Role;

  }