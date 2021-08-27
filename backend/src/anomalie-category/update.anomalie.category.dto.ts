import { CreateAnomalieCategoryDto } from './create.anomalie.category.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAnomalieCategoryDto extends PartialType(CreateAnomalieCategoryDto) {}