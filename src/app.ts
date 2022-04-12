import * as compression from 'compression';
import * as express from 'express';
import * as cors from 'cors';
import * as BodyParser from 'body-parser';
import appMiddlewares from './app.middlewares';
import MassiveImport from './utils/masiveImport';
import { createConnection } from 'typeorm';
import IAppProvider from './skeleton/services/IAppProvider';
import { CryptoService } from './utils/CryptoService';
import { IApplicationService } from './skeleton/services/utils';

export async function buildApp(config: any) {
  // Connection Database
  const cryptoService = new CryptoService(process.env.CIPHER_KEY || config.cipherKey);
  const configDecode = cryptoService.decryptObject(config);
  await createConnection(configDecode.database);

  // Create App
  const app = (express() as any) as IAppProvider;

  Object.keys(configDecode).forEach(key => {
    app.set(key, configDecode[key]);
  });

  app.registeredServices = {};
  app.useService = (name: string, service: IApplicationService<any>) => {
    app.registeredServices[name] = service;
  };
  app.service = (name: string) => app.registeredServices[name];

  // App Middlewares
  app.use(compression());
  app.use(BodyParser.urlencoded({ extended: false, limit: '50mb'  }));
  app.use(BodyParser.json({ limit: '50mb' }));
  app.use(cors({ origin: '*' }));

  app.set('appMiddlewares', appMiddlewares);

  // Services
  // set the service dir for searching all services into services directory
  const servicesDir = `${__dirname}/services/**/*.service{.ts,.js}` || `${__dirname}/services/**/*.services{.ts,.js}`;

  // get all services importing them with masiveImportUtilsTest function
  const services = MassiveImport.getInstance(servicesDir);
  if (services && services.length) {
    // register all services
    services.forEach(service => service.register(app));
  }

  return app;
}
