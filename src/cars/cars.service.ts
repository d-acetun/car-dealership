import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto, CreateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    // { id: uuid(), brand: 'Honda', model: 'Civic' },
    // { id: uuid(), brand: 'Honda', model: 'Civic' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOneById(id);
    Object.assign(car, updateCarDto);
    return car;
  }

  delete(id: string) {
    const carToDelete = this.findOneById(id);
    this.cars = this.cars.filter((c) => c.id !== carToDelete.id);
    return carToDelete;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
