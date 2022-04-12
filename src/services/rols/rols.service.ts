import { createService, registerService } from '../../skeleton/services';
import RolMiddlewares from './rols.middleware';
import RolsEntity from './rols.entity';

export default registerService<RolsEntity>(() => ({
  name: 'roles',
  entity: 'rols',
  service: createService<RolsEntity>(RolsEntity),
  middlewares: RolMiddlewares,
}));
