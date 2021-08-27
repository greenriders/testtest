import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClientDto {
    // @IsString()
    // @IsNotEmpty()
    // nom: string;

    @IsString()
    @IsNotEmpty()
    prenom: string;

    @IsString()
    @IsNotEmpty()
    telephone: string;

    // @IsEmail()
    // @IsNotEmpty()
    // email: string;

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
    pays: string;

    @IsInt()
    distributeurId: number;


}