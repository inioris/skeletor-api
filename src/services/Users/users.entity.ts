import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne }
  from 'typeorm';
import RolsEntity from '../rols/rols.entity';

@Entity('Usuario')
export default class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'IdUsuario' })
  id: number;

  @Column({ name: 'Nombre', length: '100' })
  name: string;

  @Column({ name: 'Email', length: '100' })
  email: string;

  @ManyToOne(() => RolsEntity, {eager: true})
  @JoinColumn({ name: 'IdRol' })
  rol: RolsEntity[] | number;
}
