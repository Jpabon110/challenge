import { NotFoundException, Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ContractsService } from '../application/contracts.service';
import { CreateContractDto } from '../application/dto/create-contract-use-case/create-contract.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContractEntity } from '../domain/entities/contract.entity';

@Controller('contracts')
@ApiTags('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Contract created Succesfully',
    type: ContractEntity,
    isArray: false,
  })
  async create(@Body() createContractDto: CreateContractDto) {
    try {
      return new ContractEntity(await this.contractsService.create(createContractDto));;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error,
      }, HttpStatus.BAD_REQUEST, {
        cause: error
      });
    }
  }

  @Get()
  @ApiOkResponse({ type: ContractEntity, isArray: true })
  async findAll() {
    try {      
      const contracts = await this.contractsService.findAll();
      return contracts.map((user) => new ContractEntity(user));
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error,
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const contract = await this.contractsService.findOne(+id);
    if(!contract){
      throw new HttpException('Contract not found', HttpStatus.NOT_FOUND);
    }
    return contract;
  }

}
