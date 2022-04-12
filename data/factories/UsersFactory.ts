import { define, FactoryStatic } from '../index';
import { getConnection } from 'typeorm';
import UsersEntity from '../../src/services/Users/users.entity';

const data = [
  {
    name: 'Alejandro',
    email: 'alejandro@email.com',
    rol: 1,
  },
  {
    name: 'Miguel',
    email: 'miguel@email.com',
    rol: 2,
  },
  {
    name: 'Leonardo',
    email: 'leonardo@email.com',
    rol: 2,
  },
];

define(UsersEntity, async (
  _faker: Faker.FakerStatic,
  _factory: FactoryStatic,
  count?: number)
  : Promise<UsersEntity> => {
  const entity = new UsersEntity();
  entity.name = data[count as number].name;
  entity.email = data[count as number].email;
  entity.rol = data[count as number].rol;
  return entity;
},     getConnection() as any);
