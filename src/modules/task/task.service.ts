import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TeamMember } from '../team/entities/team-member.entity';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(TeamMember)
    private readonly teamMemberRepository: Repository<TeamMember>,
  ) {}

  async create(taskData: CreateTaskDto): Promise<Task> {
    console.log('taskData', taskData);
    const assignee = await this.teamMemberRepository.findOne({
      where: { id: taskData.assigneeId },
    });

    if (!assignee) {
      throw new Error('Assignee not found');
    }

    return this.taskRepository.save({
      status: taskData.status,
      assigneeId: assignee,
      due_date: taskData.dueDate,
      description: taskData.description,
    });
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(id, updateData: UpdateTaskDto): Promise<Task> {
    console.log(updateData);
    const task = await this.findOne(id);

    if (updateData.assigneeId) {
      const assignee = await this.teamMemberRepository.findOne({
        where: { id: updateData.assigneeId },
      });
      if (!assignee) {
        throw new NotFoundException('Assignee not found');
      }
      task.assigneeId = assignee;
    }
    Object.assign(task, updateData);
    console.log('task', task);
    await this.taskRepository.save(task);
    return this.findOne(id);
  }
}
