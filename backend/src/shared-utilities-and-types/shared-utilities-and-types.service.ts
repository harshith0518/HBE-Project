import { Injectable } from '@nestjs/common';
import { CreateSharedUtilitiesAndTypeDto } from './dto/create-shared-utilities-and-type.dto';
import { UpdateSharedUtilitiesAndTypeDto } from './dto/update-shared-utilities-and-type.dto';

@Injectable()
export class SharedUtilitiesAndTypesService {
  create(createSharedUtilitiesAndTypeDto: CreateSharedUtilitiesAndTypeDto) {
    return 'This action adds a new sharedUtilitiesAndType';
  }

  findAll() {
    return `This action returns all sharedUtilitiesAndTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sharedUtilitiesAndType`;
  }

  update(id: number, updateSharedUtilitiesAndTypeDto: UpdateSharedUtilitiesAndTypeDto) {
    return `This action updates a #${id} sharedUtilitiesAndType`;
  }

  remove(id: number) {
    return `This action removes a #${id} sharedUtilitiesAndType`;
  }
}
