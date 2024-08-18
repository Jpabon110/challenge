import { ContractEntity } from "../entities/contract.entity";

export abstract class ContractRepository {
    abstract create(body: any): Promise<ContractEntity|null>;
    abstract getAll(): Promise<Array<ContractEntity>>;
    abstract getById(ContractId: number): Promise<ContractEntity|null>;
}