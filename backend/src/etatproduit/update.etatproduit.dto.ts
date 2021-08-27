import { PartialType } from '@nestjs/mapped-types';
import { CreateEtatproduitDto } from './create.etatproduit.dto';
export class UpdateEtatproduitDto extends PartialType(CreateEtatproduitDto){}