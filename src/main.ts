import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //* elimina los valores que esten de mas en el dto
      forbidNonWhitelisted: true, // lanza error si hay valores de mas en el dto. La data enviada debe de ser exactamente igual al dto
    }),
  );

  await app.listen(3000);
}
bootstrap();
