import { PartialType } from '@nestjs/mapped-types';
import { CreateTiffinManagementDto } from './create-tiffin-management.dto';

export class UpdateTiffinManagementDto extends PartialType(CreateTiffinManagementDto) {}
