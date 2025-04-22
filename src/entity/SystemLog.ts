import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LogTypeEnum } from "../interface";

@Entity()
export class SystemLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: LogTypeEnum })
  logType: LogTypeEnum;

  @Column({ type: "text" })
  message: string;

  @CreateDateColumn()
  occurredAt: Date;
}
