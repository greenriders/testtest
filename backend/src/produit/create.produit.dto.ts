import { IsString, IsNotEmpty, IsInt } from "class-validator";

export class CreateProduitDto {

    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsString()
    @IsNotEmpty()
    codeEAN: string;

    @IsString()
    @IsNotEmpty()
    longueur: string;

    @IsString()
    @IsNotEmpty()
    largeur: string;

    @IsString()
    @IsNotEmpty()
    hauteur: string;

    @IsString()
    @IsNotEmpty()
    poids: string;

    @IsInt()
    marqueId: number;

    @IsInt()
    modeleId: number;


}