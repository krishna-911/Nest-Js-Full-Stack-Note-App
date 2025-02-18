import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://DKP:Password@nest-js.ljljq.mongodb.net/?retryWrites=true&w=majority&appName=nest-js"), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
