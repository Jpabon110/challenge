import { ContractEntity } from "../../domain/entities/contract.entity";
import { ContractRepository } from "../../domain/repository/contract.repository";
import { PrismaService } from '../../../../prisma/prisma.service';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ContractRepositoryPrisma implements ContractRepository {
    constructor(private prisma: PrismaService) {}

    getById(ContractId: number): Promise<ContractEntity|null> {
      return this.prisma.contract.findUnique({ where: { id: ContractId } });
    }
    create(body: any): Promise<ContractEntity|null> {
     return this.prisma.contract.create({ data: body });
    }
    getAll(): Promise<Array<ContractEntity>> {
      return this.prisma.contract.findMany();
    }

}