import { PartialType } from '@nestjs/swagger';
import { CreateContractDto } from './create-contract-use-case/create-contract.dto';

export class UpdateContractDto extends PartialType(CreateContractDto) {}
