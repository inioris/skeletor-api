import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const table = new Table({
  name: 'Usuario',
  columns: [
    {
      name: 'IdUsuario',
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
    {
      name: 'Email',
      type: 'varchar',
      length: '100',
    },
    {
      name: 'IdRol',
      type: 'int',
    },
  ],
});

export class Users1649772756212 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(table.name);
  }

}
