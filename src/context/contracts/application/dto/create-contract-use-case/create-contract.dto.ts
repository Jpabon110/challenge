import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContractDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  clientname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  
  @IsNumber()
  @ApiProperty()
  accountNumber: number;

  @IsNumber()
  @ApiProperty()
  amount: number;

  @IsNumber()
  @ApiProperty()
  currency: string;
}