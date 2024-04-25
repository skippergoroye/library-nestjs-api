import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config(); 

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    // MongooseModule.forRoot("mongodb+srv://skippertech:skipper123Tech@nodejs.79xtnsg.mongodb.net/Library-nest-api?retryWrites=true&w=majority"),
    BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
