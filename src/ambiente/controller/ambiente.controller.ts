import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Query,
    ParseIntPipe,
  } from '@nestjs/common';
  import { AmbienteService } from 'src/ambiente/service/ambiente.service';
  import { CrearAmbienteDto , ActualizarAmbienteDto, FiltroAmbiente  } from 'src/ambiente/dto/index';

  
  @Controller('ambientes')
  export class AmbienteController {
    constructor(private readonly ambienteService: AmbienteService) {}
  
    // To create a new enviroment.....
    @Post()
    async create(@Body() crearAmbienteDto: CrearAmbienteDto) {
      return this.ambienteService.create(crearAmbienteDto);
    }
  
    // to get enviromentes or filtering by parameters
    @Get()
    async findAll(@Query() filtroAmbiente: FiltroAmbiente) {
      return this.ambienteService.findAll(filtroAmbiente);
    }
  
    // Tu get an enviroment by id
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      return this.ambienteService.findOne(id);
    }
  
    // upload an enviroment by id
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() actualizarAmbienteDto: ActualizarAmbienteDto,
    ) {
      return this.ambienteService.update(id, actualizarAmbienteDto);
    }
  
    // remove an enviroment by id
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
      return this.ambienteService.remove(id);
    }
  }
  