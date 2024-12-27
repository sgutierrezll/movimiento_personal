import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ambiente } from 'src/ambiente/entity/ambiente.entity';
import { CrearAmbienteDto , ActualizarAmbienteDto, FiltroAmbiente  } from 'src/ambiente/dto/index';


@Injectable()
export class AmbienteService {
  constructor(
    @InjectRepository(Ambiente)
    private readonly ambienteRepository: Repository<Ambiente>,
  ) {}

  async create(crearAmbienteDto: CrearAmbienteDto): Promise<Ambiente> {
    const nuevoAmbiente = this.ambienteRepository.create(crearAmbienteDto);
    return this.ambienteRepository.save(nuevoAmbiente);
  }

  async findAll(filtroAmbiente: FiltroAmbiente): Promise<Ambiente[]> {
    const query = this.ambienteRepository.createQueryBuilder('ambiente');

    if (filtroAmbiente.idUnidadOrganizacional) {
      query.andWhere('ambiente.unidadOrganizacionalId = :idUnidadOrganizacional', {
        idUnidadOrganizacional: filtroAmbiente.idUnidadOrganizacional,
      });
    }

    if (filtroAmbiente.nivel) {
      query.andWhere('ambiente.nivel = :nivel', { nivel: filtroAmbiente.nivel });
    }

    if (filtroAmbiente.codigo_Ambiente) {
      query.andWhere('ambiente.codigo_Ambiente = :codigo', {
        codigo: filtroAmbiente.codigo_Ambiente,
      });
    }

    if (filtroAmbiente.descripcion) {
      query.andWhere('ambiente.descripcion LIKE :descripcion', {
        descripcion: `%${filtroAmbiente.descripcion}%`,
      });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Ambiente> {
    return this.ambienteRepository.findOne({ where: { id } });
  }

  async update(id: number, actualizarAmbienteDto: ActualizarAmbienteDto): Promise<Ambiente> {
    await this.ambienteRepository.update(id, actualizarAmbienteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ambienteRepository.delete(id);
  }
}
