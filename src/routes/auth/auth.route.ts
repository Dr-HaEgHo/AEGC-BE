import { Router } from "express";
import { AuthController } from "../../controller/auth/auth.controller";
import { AuthValidator } from "../../validations/auth.validation";

export class AuthRoutes {
  public router: Router;
  public path: string;
  private controller: AuthController;
  private authValidation: AuthValidator;

  constructor() {
    this.router = Router();
    this.path = "/auth";
    this.controller = new AuthController();
    this.authValidation = new AuthValidator();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(
      `${this.path}/login`,
      this.authValidation.loginValidation,
      this.controller.onLogin
    );
  }
}
