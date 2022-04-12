const config = {
  port: 8000,

  /**
   * Database
   */
  database: {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'password',
    synchronize: false,
    database: 'test',
    port: 5432,
    logging: false,
    entities: [`${__dirname}/../src/services/**/*.entity{.ts,.js}`],
    migrationsTableName: 'app_migrations',
    migrations: ['dist/data/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'dist/src/data/migrations',
      entitiesDir: 'src/services/**/*.entity{.ts,.js}',
    },
  },
  token: {
    secretKey: 'secret',
    tokenExpiration: 43200,
  },
  email: {
    from: 'support@hurrabit-labs.com',
    web: 'http://localhost',
    path: '../../assets/templates',
  },
  players: {
    /**
     * Zero padding to stringify player ID (3 => 0003).
     * The padding means how much digits do you want to fill with zeros
     */
    padding: 3,
  },
};

export default config;
