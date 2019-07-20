module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 1433,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: false, // DO NOT turn this on
    migrationsRun: true,  
    logging: ['error', 'warn', 'schema'],
    options: {
      encrypt: true,
    },
    cli: {
        migrationsDir: "migration"
    }
 }