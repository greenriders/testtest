import { IsNotEmpty, IsString } from "class-validator";

export class CreateChangementDto {
    @IsString()
    @IsNotEmpty()
    nom: string;

  }