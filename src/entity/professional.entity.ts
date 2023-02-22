import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Professional {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 255 })
  nome: string
}