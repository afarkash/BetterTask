import { Resolver, Query, Mutation, Arg } from "type-graphql";
import {getConnection, getRepository} from "typeorm"
import { User } from "../models/User";
import {Book} from "../models/Book"
import { CreateUserInput } from "../inputs/CreateUserInput";



@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  async user(@Arg("id") id: string) {
    return await getRepository(Book).find({
      relations: ['book'],
      where: { user: { id } },
    });
    //return User.findOne({ where: { id } });
    //return users
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = User.create(data);
    await user.save();
    return user;
  }
}
