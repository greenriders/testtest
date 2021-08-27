import { IsNotEmpty, IsString } from "class-validator";

export class CreateAnomalieCategoryDto {
    @IsString()
    @IsNotEmpty()
    nom: string;

  }