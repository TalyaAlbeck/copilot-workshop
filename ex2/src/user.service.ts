import { Injectable, OnModuleInit } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";

@Injectable()
export class UserService implements OnModuleInit {
  async onModuleInit() {
    // Create a default user if none exist and join the posts relation to the query
    const userCount = await this.userRepository.count({ relations: ["posts"] });
    if (userCount === 0) {
      const defaultUser = this.userRepository.create({
        name: "Default User",
        email: "default@example.com",
      });
      await this.userRepository.save(defaultUser);
    }
  }
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  getHello(): string {
    return "Hello from UserService!";
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find({ relations: ["posts"] });
  }

  createUser(name: string, email: string): Promise<User> {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  // this function get all users using using TypeORM's query builder (not find)
  async getAllUsersWithQueryBuilder(): Promise<User[]> {
    return await this.userRepository.createQueryBuilder("user")
      .leftJoinAndSelect("user.posts", "post")
      .getMany();
  }
}
