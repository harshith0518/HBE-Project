import { Module } from '@nestjs/common';
import { SharedUtilitiesAndTypesService } from './shared-utilities-and-types.service';
import { SharedUtilitiesAndTypesController } from './shared-utilities-and-types.controller';

@Module({
  controllers: [SharedUtilitiesAndTypesController],
  providers: [SharedUtilitiesAndTypesService],
})
export class SharedUtilitiesAndTypesModule {}
