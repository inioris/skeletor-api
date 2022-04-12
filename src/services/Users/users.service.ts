import { createService, registerService } from '../../skeleton/services';
import UsersMiddlewares from './users.middleware';
import UsersEntity from './users.entity';

export default registerService<UsersEntity>(() => ({
  name: 'usuario',
  entity: 'users',
  service: createService<UsersEntity>(UsersEntity),
  middlewares: UsersMiddlewares,
}));
