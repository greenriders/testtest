import { IsNotEmpty, IsString } from "class-validator";

export class CreateEtatproduitDto {

    @IsString()
    @IsNotEmpty()
    etat: string

  }