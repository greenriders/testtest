import { IsString, IsNotEmpty, IsInt } from "class-validator";

export class CreateModeleDto {
    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsInt()
    marqueId: number;

}