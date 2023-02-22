import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Professional } from './professional.entity';

@Entity()
export class Timeslot {
  @PrimaryGeneratedColumn()
  id: number

    // add column explicitly here
  @Column()
  professionalId: number;
  @OneToOne(() => Professional, { nullable: false, eager: true })
  @JoinColumn({ name: "professionalId" } )
  professional: Professional

  @Column({ type: 'timestamp' })
  initialTime: Date
  
  @Column({ type: 'timestamp' })
  finishTime: Date
}