import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from 'src/cargo/entity/cargo.entity';
import { CrearCargoDto, ActualizarCargoDto, FiltroCargoDto } from 'src/cargo/dto';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) {}

  async create(crearCargoDto: CrearCargoDto): Promise<Cargo> {
    const nuevoCargo = this.cargoRepository.create(crearCargoDto);
    return this.cargoRepository.save(nuevoCargo);
  }

  async findAll(filtroCargoDto: FiltroCargoDto): Promise<Cargo[]> {
    const query = this.cargoRepository.createQueryBuilder('cargo');

    if (filtroCargoDto.nombre) {
      query.andWhere('cargo.nombre LIKE :nombre', {
        nombre: `%${filtroCargoDto.nombre}%`,
      });
    }

    if (filtroCargoDto.descripcion) {
      query.andWhere('cargo.descripcion LIKE :descripcion', {
        descripcion: `%${filtroCargoDto.descripcion}%`,
      });
    }

    if (filtroCargoDto.escala_Salarial) {
      query.andWhere('cargo.escala_Salarial = :escala_Salarial', {
        escala_Salarial: filtroCargoDto.escala_Salarial,
      });
    }

    if (filtroCargoDto.id_TipoCargo) {
      query.andWhere('cargo.tipoCargoId = :id_TipoCargo', {
        id_TipoCargo: filtroCargoDto.id_TipoCargo,
      });
    }

    if (filtroCargoDto.denominacion) {
      query.andWhere('cargo.denominacion LIKE :denominacion', {
        denominacion: `%${filtroCargoDto.denominacion}%`,
      });
    }

    if (filtroCargoDto.id_UnidadOrganizacional) {
      query.andWhere(
        'cargo.unidadOrganizacionalId = :id_UnidadOrganizacional',
        { id_UnidadOrganizacional: filtroCargoDto.id_UnidadOrganizacional },
      );
    }

    if (filtroCargoDto.fianza !== undefined) {
      query.andWhere('cargo.fianza = :fianza', { fianza: filtroCargoDto.fianza });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Cargo> {
    return this.cargoRepository.findOne({ where: { id } });
  }

  async update(id: number, actualizarCargoDto: ActualizarCargoDto): Promise<Cargo> {
    await this.cargoRepository.update(id, actualizarCargoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cargoRepository.delete(id);
  }
}
