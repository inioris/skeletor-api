import { define, FactoryStatic } from '../index';
import { getConnection } from 'typeorm';
import RolsEntity from '../../src/services/rols/rols.entity';

const data = [
  {
    name: 'Doctor',
  },
  {
    name: 'Asistente',
  },
  {
    name: 'Secretaria',
  },
];


define(RolsEntity, async (
  _faker: Faker.FakerStatic,
  _factory: FactoryStatic,
  count?: number)
  : Promise<RolsEntity> => {
  const entity = new RolsEntity();
  entity.name = data[count as number].name;
  return entity;
},     getConnection() as any);
