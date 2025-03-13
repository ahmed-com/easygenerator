import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Easy Generator API')
    .setDescription('The Easy Generator API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config, {
    operationIdFactory: (_: string, methodKey: string) => methodKey,
  });
  SwaggerModule.setup('api-docs', app, documentFactory, {
    jsonDocumentUrl: '/api-docs-json',
    yamlDocumentUrl: '/api-docs-yaml',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
