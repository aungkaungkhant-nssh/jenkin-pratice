import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user-process/user/entities/user.entity';
import { ModeEnum } from 'src/util/mode.enum';

const isRenderDatabase = process.env.DATABASE_HOST?.includes('render.com');
const sslReject = (process.env.MODE === ModeEnum.Production || isRenderDatabase) ? {
    ssl: {
        rejectUnauthorized: false,
    },
} : null;

const DataSource = TypeOrmModule.forRoot(

    {
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        ...sslReject,
        entities: [User],
        synchronize: true,
    }
);

export const Databases = [DataSource];
