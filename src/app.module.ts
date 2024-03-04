import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } from './constant';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
