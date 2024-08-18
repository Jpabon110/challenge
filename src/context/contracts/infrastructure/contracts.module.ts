import { Module } from '@nestjs/common';
import { ContractsService } from '../application/contracts.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { ContractsController } from './contracts.controller';
import { ContractRepositoryPrisma } from './repository/contracts.repository.prisma';
import { ContractRepository } from '../domain/repository/contract.repository';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  controllers: [ContractsController],
  providers: [ContractsService,
    ContractRepositoryPrisma,
    PrismaService,
    {
      provide: ContractRepository,
      useExisting: ContractRepositoryPrisma,
    }
 ],
  imports: [PrismaModule],
})
export class ContractsModule {}
