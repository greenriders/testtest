import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDistributeurDto{

    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsString()
    @IsNotEmpty()
    adresse: string;


    @IsString()
    @IsNotEmpty()
    ville: string;

    @IsString()
    @IsNotEmpty()
    codePostal: string;

    @IsString()
    @IsNotEmpty()
    telephone: string; 

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    pays: string;

}