import { PartialType } from '@nestjs/mapped-types';
import { CreateChangementDto } from './create.changement.dto';

export class UpdateChangementDto extends PartialType(CreateChangementDto) {}