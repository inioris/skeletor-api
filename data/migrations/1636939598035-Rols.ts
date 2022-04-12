import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const table = new Table({
  name: 'Roles',
  columns: [
    {
      name: 'IdRol',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment',
    },
    {
      name: 'Nombre',
      type: 'varchar',
      length: '100',
    },
  ],
});

export class Rols1636939598035 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('Roles');
  }

}
