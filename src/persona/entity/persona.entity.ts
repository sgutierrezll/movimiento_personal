import { Usuario } from 'src/usuario/entity/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PersonaModule } from '../persona.module';

@Entity('persona')
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidoP: string;

  @Column()
  apellidoM: string;

  @Column()
  documento: string;

  @Column({ type: 'date' })
  fechaNac: Date;

  @Column()
  telefono: string;

  @OneToMany( ()=> Usuario , usuario => usuario.persona)
  usuarios : Usuario[]


}
