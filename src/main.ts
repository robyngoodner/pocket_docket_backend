import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HOST = 'localhost'
const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
  });
}
bootstrap();
