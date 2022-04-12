import { FactoryStatic, Seeder } from '../index';
import UsersEntity from
    '../../src/services/Users/users.entity';

export default class RolesSeeder implements Seeder {
  async seed(factory:FactoryStatic): Promise<void> {
    await factory.get(UsersEntity).createMany(2);
  }
}
