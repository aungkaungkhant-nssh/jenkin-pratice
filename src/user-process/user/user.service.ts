// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    // 1. Check if users exist
    const count = await this.userRepository.count();

    // 2. If no users, seed some default ones
    if (count === 0) {
      await this.seedUsers();
    }

    // 3. Return all users
    return this.userRepository.find();
  }

  async seedUsers() {
    const defaultUsers = [
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Charlie' },
    ];

    const users = this.userRepository.create(defaultUsers);
    await this.userRepository.save(users);
  }

}
