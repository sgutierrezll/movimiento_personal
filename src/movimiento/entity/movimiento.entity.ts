import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Funcionario } from 'src/funcionario/entity/funcionario.entity';

@Entity('movimiento')
export class Movimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modalidad: string;

  @Column()
  nroDocumento: string;

  @Column()
  tipoMovimiento: string;

  @Column()
  estado: string;

  @Column({ type: 'date' })
  fechaAprobacion: Date;

  @Column()
  memorandum: string;

  @ManyToOne( ()=> Funcionario, funcionario => funcionario.movimientos)
  funcionario : Funcionario;



}
