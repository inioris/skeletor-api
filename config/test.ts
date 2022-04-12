const config = {
  port: 8000,
  /**
   * Database
   */
  database: {
    type: 'postgres',
    host: 'localhost',
    username: 'root',
    password: 'inioris',
    database: 'test',
    port: 5432,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/../src/services/**/*.entity{.ts,.js}`],
    migrationsTableName: 'app_migrations',
    migrations: ['dist/data/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'data/migrations',
      entitiesDir: `${__dirname}/../src/services/**/*.entity{.ts,.js}`,
    },
  },
  token: {
    secretKey: 'secret',
    tokenExpiration: 43200,
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
