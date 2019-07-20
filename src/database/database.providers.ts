// TODO: currently init in app module, prob better to have it here
import { createConnection } from 'typeorm';

export const databaseProviders = [
  // {
  //   provide: 'DATABASE_CONNECTION',
  //   useFactory: async () => await createConnection({
  //     type: 'mssql',
  //     host: process.env.DB_HOST,
  //     port: 1433,
  //     database: process.env.DB_DATABASE,
  //     username: process.env.DB_USER,
  //     password: process.env.DB_PASS,
  //     entities: [
  //         __dirname + '/../**/*.entity{.ts,.js}',
  //     ],
  //     synchronize: true,
  //     logging: ['error', 'warn', 'schema'],
  //     options: {
  //       encrypt: true,
  //     }
  //   }),
  // },
];