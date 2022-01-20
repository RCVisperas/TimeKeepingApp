import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await await (
    await NestFactory.create(AppModule)
  ).useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )

  app.enableCors({
    origin: 'http://localhost:3000',
  })

  await app.listen(5000)
}
bootstrap()
