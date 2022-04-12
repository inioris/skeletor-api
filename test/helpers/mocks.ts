import * as faker from 'faker';
import { isArray } from 'lodash';
import IAppProvider from '../../src/skeleton/services/IAppProvider';
export const headerService =
  '{"user":{"id":0,"name":"Alejandro","firstSurname":"ramirez","email":"example@bretonWorks.edu.do","permissions":["manage_admin_users","manage_doctor","manage_general_settings"]}}';

export const mocks = {
  rols: {
    data: [
      {
        name: faker.lorem.paragraph().substring(0, 40),
      },
      {
        name: faker.lorem.paragraph().substring(0, 40),
      },
    ],
  },
};

export async function configureMocks(app: IAppProvider) {
  for (const service in mocks) {
    const model = mocks[service].data;
    if (isArray(model)) {
      for (const itemModel of model) {
        for (const property in itemModel) {
          if (itemModel.hasOwnProperty(property)) {
            if (typeof itemModel[property] === 'function') {
              itemModel[property] = await itemModel[property](app);
            }
          }
        }
        await app.service(service).create(itemModel);
      }
    } else {
      for (const property in model) {
        if (model.hasOwnProperty(property)) {
          if (typeof model[property] === 'function') {
            model[property] = await model[property](app);
          }
        }
      }
      await app.service(service).create(model);
    }
  }
}
