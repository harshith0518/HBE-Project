import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharedUtilitiesAndTypesService } from './shared-utilities-and-types.service';
import { CreateSharedUtilitiesAndTypeDto } from './dto/create-shared-utilities-and-type.dto';
import { UpdateSharedUtilitiesAndTypeDto } from './dto/update-shared-utilities-and-type.dto';

@Controller('shared-utilities-and-types')
export class SharedUtilitiesAndTypesController {
  constructor(private readonly sharedUtilitiesAndTypesService: SharedUtilitiesAndTypesService) {}

  @Post()
  create(@Body() createSharedUtilitiesAndTypeDto: CreateSharedUtilitiesAndTypeDto) {
    return this.sharedUtilitiesAndTypesService.create(createSharedUtilitiesAndTypeDto);
  }

  @Get()
  findAll() {
    return this.sharedUtilitiesAndTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharedUtilitiesAndTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSharedUtilitiesAndTypeDto: UpdateSharedUtilitiesAndTypeDto) {
    return this.sharedUtilitiesAndTypesService.update(+id, updateSharedUtilitiesAndTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedUtilitiesAndTypesService.remove(+id);
  }
}
