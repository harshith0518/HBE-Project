import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiffinManagementService } from './tiffin-management.service';
import { CreateTiffinManagementDto } from './dto/create-tiffin-management.dto';
import { UpdateTiffinManagementDto } from './dto/update-tiffin-management.dto';

@Controller('tiffin-management')
export class TiffinManagementController {
  constructor(private readonly tiffinManagementService: TiffinManagementService) {}

  @Post()
  create(@Body() createTiffinManagementDto: CreateTiffinManagementDto) {
    return this.tiffinManagementService.create(createTiffinManagementDto);
  }

  @Get()
  findAll() {
    return this.tiffinManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiffinManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiffinManagementDto: UpdateTiffinManagementDto) {
    return this.tiffinManagementService.update(+id, updateTiffinManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiffinManagementService.remove(+id);
  }
}
