import { Module } from '@nestjs/common';
import { AppController } from './http-api/app.controller';
import { AppService } from './http-api/app.service';
import { PrismaModule } from '../../../prisma/prisma.module';
import { ContractsModule } from '../domain/contracts.module';

@Module({
  imports: [PrismaModule, ContractsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
