import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { ContractTypeEnum, DepartmentEnum, StatusEnum } from "../interface";
import { StaffCredential } from "./StaffCredential";

@Entity()
export class Employee {
  @PrimaryColumn()
  staffId: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: true })
  jobTitle: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ type: "text", nullable: true })
  homeAddress: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  stateProvince: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  countryProvince: string;

  @Column({ nullable: true })
  businessPhone: string;

  @Column({ nullable: false })
  mobilePhone: string;

  @Column({ type: "date", nullable: false })
  dateOfEntry: Date;

  @Column({ type: "enum", enum: DepartmentEnum })
  department: DepartmentEnum;

  @Column({ type: "enum", enum: StatusEnum, default: StatusEnum.ACTIVE })
  status: StatusEnum;

  @Column({
    type: "enum",
    enum: ContractTypeEnum,
    default: ContractTypeEnum.PERMANENT,
  })
  contractType: ContractTypeEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => StaffCredential, (cred) => cred.employee)
  credential: StaffCredential;
}
