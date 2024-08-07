import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
} from '../environment';
import { Task } from 'src/modules/task/entities/task.entity';
import { TeamMember } from 'src/modules/team/entities/team-member.entity';

const connectConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Task, TeamMember],
  synchronize: true,
};

const config = {
  connectConfig,
};

export = config;
