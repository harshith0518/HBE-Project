import { PartialType } from '@nestjs/mapped-types';
import { CreateSharedUtilitiesAndTypeDto } from './create-shared-utilities-and-type.dto';

export class UpdateSharedUtilitiesAndTypeDto extends PartialType(CreateSharedUtilitiesAndTypeDto) {}
