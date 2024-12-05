import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import entities from './typeorm';

@Module({
  imports: [
    AuthModule,
    // TypeOrmModule.forRoot({
    //   entities: entities,
    //   synchronize: true, // Synchronize models with the database - Not for production
    //   type: 'mysql', // Specify our database type
    //   host: 'localhost', // Database host
    //   port: 3306, // Database port
    //   username: 'optic', // Database username
    //   password: 'Password', // Database password
    //   database: 'optic', // Database name
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
