import { Injectable } from '@nestjs/common';
import { CreateContractDto } from '../application/dto/create-contract-use-case/create-contract.dto';
import { UpdateContractDto } from '../application/dto/update-contract.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  create(createContractDto: CreateContractDto) {
    return this.prisma.contract.create({ data: createContractDto });
  }

  findAll() {
    return this.prisma.contract.findMany();
  }

  findOne(id: number) {
    return this.prisma.contract.findUnique({ where: { id } });
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return `This action updates a #${id} contract`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
}
