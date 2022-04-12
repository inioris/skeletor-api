import { expect } from '../../../helpers/expect';
import { shutdownEach, setupEach } from '../../../helpers/configTest';
import { headerService } from '../../../helpers/mocks';
import * as faker from 'faker';

describe('rols Service', () => {

  const me = this;
  beforeAll(setupEach.bind(me));
  afterAll(shutdownEach.bind(me));

  // utils const for it blocks
  const serviceName = 'rols';
  const serviceRoute = '/roles';

  it('get a list of field service rols', async function () {
    // Call to service of rols.
    const rols = await me.app.service(serviceName).find({});

    expect(rols.length).to.be.greaterThan(0);
    expect(rols.shift()).to.have.property('id');
  });

  it('should return a rols', async function () {
    // Call to service of rols
    const rols = await me.app.service(serviceName).get(1);

    expect(rols).to.have.property('id');
    expect(rols).to.be.haveOwnProperty('name');
  });

  it('should update a rols', async function () {
    // Set data for update rols
    const data =  {
      name: faker.lorem.paragraph().substring(0, 40),
    };

    // Call to service of rols.
    const rols = await me.app.service(serviceName).update(1, data);

    expect(rols.name).to.equal(data.name);
  });

  it('should add a rols', async function () {
    // Set data for rols
    const data =  {
      name: faker.lorem.paragraph().substring(0, 40),
    };

    // Call to service of rols.
    const rols = await me.app.service(serviceName).create(data);

    expect(rols).to.have.property('id');
    expect(rols.name).to.be.equal(data.name);
  });

  it('should delete a rols by id', async function () {
    // Set data for rols
    const data =  {
      name: faker.lorem.paragraph().substring(0, 40),
    };

    // Call to service of rols.
    const rolsId = await me.app.service(serviceName).create(data);

    // Call to service of rols.
    const rols = await me.app.service(serviceName).delete(rolsId.id);
    expect(rols).to.have.property('name');
  });

  describe('client', () => {
    it('should create a new rols', async function () {
      // Set data for creation a rols.
      const data =  {
        name: faker.lorem.paragraph().substring(0, 40),
      };

      const rols = await me.client.post(`${serviceRoute}`)
        .set({ 'X-Service': headerService })
        .send(data);
      expect(rols.body).to.have.property('data');
      expect(rols.body.data.name).to.be.equal(data.name);
    });

    it('should updating a rols', async function () {
      // Set data for update a rols.
      const data =  {
        name: faker.lorem.paragraph().substring(0, 40),
      };

      const rols = await me.client.put(`${serviceRoute}/1`)
        .send(data)
        .set({ 'X-Service': headerService });

      expect(rols.body.data).to.have.property('name');
      expect(rols.body.data.name).to.be.equal(data.name);
    });

    it('should return a list of rols', async function () {
      const rols = await me.client.get(`${serviceRoute}`)
        .set({ 'X-Service': headerService });
      expect(rols.body).to.be.haveOwnProperty('data');
      expect(rols.body.data.length).to.be.greaterThan(0);
    });

    it('should delete a rols', async function () {
      const data =  {
        name: faker.lorem.paragraph().substring(0, 40),
      };

      // Call to service of rols.
      const rols = await me.app.service(serviceName).create(data);
      const rolsDeleted = await me.client
        .delete(`${serviceRoute}/${rols.id}`)
        .set({ 'X-Service': headerService });
      expect(rolsDeleted.body).to.have.property('data');
      expect(rolsDeleted.body.data.name).to.be.equal(data.name);
    });
  });
});
