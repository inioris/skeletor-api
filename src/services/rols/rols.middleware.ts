import { IMiddlewaresSchema } from '../../skeleton/services/IMiddlewaresSchema';
import { disallow } from '../../skeleton/middlewares';

const middlewares: IMiddlewaresSchema = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [disallow()],
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
};

export default middlewares;
