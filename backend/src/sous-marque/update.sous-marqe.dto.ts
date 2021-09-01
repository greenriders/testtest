import { PartialType } from '@nestjs/mapped-types';
import { CreateSousMarqueDto } from './create.sous-marque.dto';
export class UpdateSousMarqueDto extends PartialType(CreateSousMarqueDto){}