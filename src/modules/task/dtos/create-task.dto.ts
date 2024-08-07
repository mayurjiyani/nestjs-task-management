import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task description1',
    description: 'A brief description of the task',
  })
  description: string;

  @ApiProperty({
    example: '2024-08-06T23:59:59Z',
    description: 'The due date and time for the task in ISO 8601 format',
  })
  dueDate: Date;

  @ApiProperty({
    example: 2,
    description: 'The ID of the user to whom the task is assigned',
  })
  assigneeId: number;

  @ApiProperty({
    example: 'pending',
    description: 'The current status of the task',
    enum: ['pending', 'in-progress', 'completed'], // Enum options if applicable
  })
  status: string;
}
