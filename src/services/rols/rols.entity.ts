import { Entity, PrimaryGeneratedColumn, Column, BaseEntity }
  from 'typeorm';

@Entity('Roles')
export default class RolsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'IdRol' })
  id: number;

  @Column({ name: 'Nombre', length: '100' })
  name: string;
}
