import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RoleEnum } from "../interface";
import { Employee } from "./Employee";

@Entity()
export class StaffCredential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  staffId: string;

  @Column({ length: 64 })
  hashedPassword: string;

  @Column({ type: "enum", enum: RoleEnum, default: RoleEnum.USER })
  role: RoleEnum;

  @CreateDateColumn()
  registrationDate: Date;

  @OneToOne(() => Employee, (employee) => employee.credential)
  @JoinColumn({ name: "staffId" })
  employee: Employee;
}
