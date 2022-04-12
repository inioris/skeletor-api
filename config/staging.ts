const config = {
  port: 80,
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
    secretKey: 'hidden:AQICAHhyzYuygc9/4d8HI9QgfrTSyMUV3nP2bZwee9PrR' +
      'O0AQgGgGNjZq32SVBxzlb0jELo9AAAAfDB6BgkqhkiG9w0BBwagbTBrAgEAMGY' +
      'GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMUlEttRjfj03OSxKQAgEQgDmOMz' +
      'iB7uD57GJctmP3VVmfIYW3XDRyLeKUTl/2IDmHBpfQCZ30vwVVkvwYQ9IkRUACwoaYXeV0whQ=',
    tokenExpiration: 43200,
  },
  email: {
    from: 'support@hurrabit-labs.com',
    web: 'http://cockfightsportbets.hurrabit-labs.com',
    path: '../../../assets/templates',
  },
  players: {
    /**
     * Zero padding to stringify player ID (3 => 0003).
     * The padding means how much digits do you want to fill with zeros
     */
    padding: 3,
  },
  support: {
    email: 'support@hurrabit-labs.com',
  },
};

export default config;
