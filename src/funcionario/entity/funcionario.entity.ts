import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Persona } from 'src/persona/entity/persona.entity';
import { Cargo } from 'src/cargo/entity/cargo.entity';
import { Movimiento } from 'src/movimiento/entity/movimiento.entity';
import { cargo } from '../../enums/cargo.enum';

@Entity({ name :'funcionario'})
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha_Incorporacion: Date;

  @Column({ type: 'date'})
  fechaBaja: Date;

  @Column()
  fianza: string;

  @OneToMany( () => Movimiento, movimiento => movimiento.funcionario)
  movimientos : Movimiento[]

  @OneToOne( ()=> Cargo , cargo => cargo.funcionario)
  @JoinColumn()
  cargo :Cargo


}
