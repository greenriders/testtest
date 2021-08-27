import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAnomalieDto {
    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsNumber()
    prix: number

    @IsInt()
    anomalieCategoryId: number;
  }