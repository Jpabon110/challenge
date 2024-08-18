import { ApiProperty } from '@nestjs/swagger';
import { Contract } from '@prisma/client';

export class ContractEntity implements Contract {
  constructor(partial: Partial<ContractEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  initialdate: Date;

  @ApiProperty()
  clientname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  accountNumber: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  currency: string;
}