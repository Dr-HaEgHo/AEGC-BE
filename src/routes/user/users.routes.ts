import { Router } from "express";
import { UserController } from "../../controller/user/user.controller";

export class UserRoutes {
  public router: Router;
  public path: string;
  private controller: UserController;

  constructor() {
    this.path = "/user";
    this.router = Router();
    this.controller = new UserController();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(`${this.path}`, this.controller.getAllUsers);
  }
}
