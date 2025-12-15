import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe, VersioningType } from '@nestjs/common';
// import { ApiKeyMiddleware } from './api-key-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true
  });

  // cors origin
  const corsOrigins = process.env.CORS_ORIGINS?.split(',')
    .filter(Boolean)
    .map(origin => origin.trim());

  app.enableCors({
    origin: corsOrigins,
    credentials: true
  });

  // api key
  // app.use(new ApiKeyMiddleware().use);

  app.use(helmet());

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
