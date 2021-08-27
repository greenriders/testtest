import { IsNotEmpty, IsString } from "class-validator";

export class CreateInterventionDto {

    @IsString()
    @IsNotEmpty()
    type: string

  }