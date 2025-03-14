import { Logger, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validationSchema } from './config.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`${process.env.STAGE ? '.' + process.env.STAGE : ''}.env`],
      validationSchema,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        onConnectionCreate: (connection: Connection) => {
          const logger = new Logger('Mongoose');
          connection.on('connected', () => logger.verbose('Connected to MongoDB'));
          connection.on('open', () => logger.verbose('Connection opened'));
          connection.on('disconnected', () => logger.warn('Disconnected from MongoDB'));
          connection.on('reconnected', () => logger.verbose('Reconnected to MongoDB'));
          connection.on('disconnecting', () => logger.warn('Disconnecting from MongoDB'));
          return connection;
        },
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
