import { Module } from '@nestjs/common';
import { TiffinManagementService } from './tiffin-management.service';
import { TiffinManagementController } from './tiffin-management.controller';

@Module({
  controllers: [TiffinManagementController],
  providers: [TiffinManagementService],
})
export class TiffinManagementModule {}
