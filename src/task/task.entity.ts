// src/task/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TeamMember } from '../team/team-member.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @ManyToOne(() => TeamMember, { eager: true })
  assignee: TeamMember;

  @Column({ default: 'pending' })
  status: string;
}
