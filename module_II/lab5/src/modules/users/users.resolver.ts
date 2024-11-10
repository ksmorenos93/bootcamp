import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserInput } from './dto/user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Query(() => User, { name: 'userById' })
  getUserById(@Args('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('userInput') userInput: UserInput) {
    return this.usersService.createUser(userInput);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateUser(
    @Args('id') id: string,
    @Args('userInput') userInput: UserInput
  ) {
    return this.usersService.updateUser(id, userInput);
  }

}