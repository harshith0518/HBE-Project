import { Injectable } from '@nestjs/common';
import { CreateTiffinManagementDto } from './dto/create-tiffin-management.dto';
import { UpdateTiffinManagementDto } from './dto/update-tiffin-management.dto';

@Injectable()
export class TiffinManagementService {
  create(createTiffinManagementDto: CreateTiffinManagementDto) {
    return 'This action adds a new tiffinManagement';
  }

  findAll() {
    return `This action returns all tiffinManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiffinManagement`;
  }

  update(id: number, updateTiffinManagementDto: UpdateTiffinManagementDto) {
    return `This action updates a #${id} tiffinManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiffinManagement`;
  }
}
