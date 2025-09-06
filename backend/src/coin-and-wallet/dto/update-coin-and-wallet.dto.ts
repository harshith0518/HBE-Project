import { PartialType } from '@nestjs/mapped-types';
import { CreateCoinAndWalletDto } from './create-coin-and-wallet.dto';

export class UpdateCoinAndWalletDto extends PartialType(CreateCoinAndWalletDto) {}
