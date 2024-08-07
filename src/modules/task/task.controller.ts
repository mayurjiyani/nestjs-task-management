// src/task/task.controller.ts
import {
  Controller,
  Post,
  Get,
  // Put,
  Param,
  Body,
  UseGuards,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { JwtAuthGuard } from 'src/frameworks/guards/jwt-auth.guard';
import { CreateTaskDto } from './dtos/create-task.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateTaskDto } from './dtos/update-task.dto';

@ApiTags('tasks')
@Controller('tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Create a new task' })
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
    type: Task,
  })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() taskData: CreateTaskDto): Promise<Task> {
    return this.taskService.create(taskData);
  }

  @ApiOperation({ summary: 'Retrieve all tasks' })
  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all tasks',
    type: [Task],
  })
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a task by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the task', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'The task with the given ID',
    type: Task,
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the task', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'The task has been successfully updated',
    type: Task,
  })
  @Patch(':id')
  async updateTaskStatus(
    @Param('id') id: number,
    @Body() updateData: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, updateData);
  }
}
