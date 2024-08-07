import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    example: 'in-progress',
    description: 'The updated status of the task',
    required: false,
    enum: ['pending', 'in-progress', 'completed'], // Enum options for status
  })
  status?: string;

  @ApiProperty({
    example: 3,
    description: 'The updated ID of the user to whom the task is assigned',
    required: false,
  })
  assigneeId?: number;

  @ApiProperty({
    example: '2024-08-10T23:59:59Z',
    description:
      'The updated due date and time for the task in ISO 8601 format',
    required: false,
  })
  dueDate?: Date;

  @ApiProperty({
    example: 'Updated task description',
    description: 'The updated description of the task',
    required: false,
  })
  description?: string;
}
