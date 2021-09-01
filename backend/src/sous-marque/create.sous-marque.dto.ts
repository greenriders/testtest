import { IsNotEmpty, IsString, IsInt } from "class-validator";

export class CreateSousMarqueDto {
  @IsString()
  @IsNotEmpty()
  nom: string;


  @IsInt()
  marqueId: number;
}