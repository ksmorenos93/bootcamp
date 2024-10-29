import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUserByUserId(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { userId: userId },
      select: {
        userId: true,
        name: true,
        email: true
      },
    });

    if (!user) {
        throw new NotFoundException('Score not found');
    }

    return user;
  }

  createUser(userDto: CreateUserDto) {
    return this.prisma.user.create({data: userDto});
  }

}
