import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://NivNaim:Niv271201@niv-test.tdwk8fe.mongodb.net/?retryWrites=true&w=majority&appName=niv-test',
      { dbName: 'niv-test' },
    ),
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
