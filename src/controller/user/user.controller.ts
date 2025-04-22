import { Response, Request, NextFunction } from "express";
import { Repository } from "typeorm";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";

export class UserController {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  public getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userRepository.find();

      return res.send(users);
    } catch (err) {
      return res.status(404).send("error in fetching users");
    }
  };
}
