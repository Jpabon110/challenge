import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract-use-case/create-contract.dto';
import { ContractRepository } from '../../contracts/domain/repository/contract.repository';

@Injectable()
export class ContractsService {
  constructor(private repository: ContractRepository) {}

  create(createContractDto: CreateContractDto) {
    return this.repository.create(createContractDto);
  }

  findAll() {
    return this.repository.getAll();
  }

  findOne(id: number) {
    return this.repository.getById(id);
  }

}
