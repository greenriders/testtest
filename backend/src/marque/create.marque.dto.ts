import { IsNotEmpty, IsString } from "class-validator";

export class CreateMarqueDto {
    @IsString()
    @IsNotEmpty()
    nom: string;

  }