import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Persona } from 'src/persona/entity/persona.entity';

@Entity({ name: 'usuario'})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()  
  rol: string;    // duda: is it okay as string or enum?

  @Column({ type: 'datetime' })
  registro: Date;

  @Column({ type: 'datetime'})
  ultima_Session: Date;

  @ManyToOne( () => Persona, persona => persona.usuarios)
  persona : Persona;



}
