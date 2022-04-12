import { FactoryStatic, Seeder } from '../index';
import RolsEntity from
    '../../src/services/rols/rols.entity';

export default class RolesSeeder implements Seeder {
  async seed(factory:FactoryStatic): Promise<void> {
    await factory.get(RolsEntity).createMany(3);
  }
}
