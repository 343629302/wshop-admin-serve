import { AllExceptionsFilter } from '@libs/db/common/http-exception';
import { Validation } from '@libs/db/common/validation';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const options = new DocumentBuilder()
    .setTitle('微商城')
    .setDescription('服务端')
    .setVersion('1.0')
    
    .build();
  const app = await NestFactory.create(AppModule);
  //全局管道配置
  app.useGlobalPipes(
    //参数验证
    Validation
  );
  app.useGlobalFilters(
    //使用http请求错误拦截器
    new AllExceptionsFilter(),
  );
  //添加全局前缀
  app.setGlobalPrefix('/api');
  const document = SwaggerModule.createDocument(app, options);
  //设置swagger
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3001);
}
bootstrap();
