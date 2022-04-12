
const config = {
  port: 80,
  database: {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'password',
    synchronize: false,
    database: 'test',
    port: 25060,
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
    secretKey: 'hidden:AQICAHgA5xI7sIT6sgys2lLDvzBC/Py5lH2TP' +
      'mexTjnLNUfQ/wHtFhVusi/I6l6ZLkejUrusAAAAfDB6BgkqhkiG9w0' +
      'BBwagbTBrAgEAMGYGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMw3' +
      'y+xyH9QgqHhpSzAgEQgDlCeZMIsN2drfY+bQQXfYzOewHlnIVarJQ0w' +
      'H/fN/vD+nOSKta7P0yCPZh4rNl4D2nDxswRwISMicQ=',
    tokenExpiration: 43200,
  },
  email: {
    from: 'support@hurrabit-labs.com',
    web: 'http://cockfightsportbets.com/',
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
