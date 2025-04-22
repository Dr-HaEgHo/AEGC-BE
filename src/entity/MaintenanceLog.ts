import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Asset } from "./Asset";

@Entity()
export class MaintenanceLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assetId: string;

  @Column({ type: "date" })
  maintenanceDate: Date;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  cost: number;

  @Column({ nullable: true })
  technician: string;

  @ManyToOne(() => Asset, (asset) => asset.maintenanceLogs)
  asset: Asset;
}
