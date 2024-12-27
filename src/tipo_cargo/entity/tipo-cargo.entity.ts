import { Cargo } from 'src/cargo/entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({name:'tipo_cargo'})
export class TipoCargo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany( () => Cargo , cargo => cargo.tipoCargo)
  tipoCargos: Cargo
}
