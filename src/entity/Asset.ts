import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { AssetCategoryEnum, AssetConditionEnum } from "../interface";
import { MaintenanceLog } from "./MaintenanceLog";

@Entity()
export class Asset {
  @PrimaryColumn()
  asset_id: string;

  @Column()
  item: string;

  @Column({ type: "enum", enum: AssetCategoryEnum })
  category: AssetCategoryEnum;

  @Column({ nullable: true })
  manufacturer: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  imei: string;

  @Column({ nullable: true })
  serial_number: string;

  @Column({ type: "date" })
  acquired_date: Date;

  @Column({ type: "decimal", precision: 12, scale: 2, nullable: true })
  purchase_price: number;

  @Column({ type: "enum", enum: AssetConditionEnum })
  condition: AssetConditionEnum;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  purchased_by: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => MaintenanceLog, (log) => log.asset)
  maintenanceLogs: MaintenanceLog[];
}
