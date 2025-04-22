import { Repository } from "typeorm";
import { Request, Response } from "express";
import { BaseController } from "../response.controller";
import { StaffCredential } from "../../entity/StaffCredential";
import { AppDataSource } from "../../data-source";
import { Employee } from "../../entity/Employee";
import { PasswordService } from "../../utils/passwordService";

export class AuthController extends BaseController {
  private staffCredentialRepo: Repository<StaffCredential>;
  private employeeRepo: Repository<Employee>;
  private passwordService: PasswordService;

  constructor() {
    super();

    this.staffCredentialRepo = AppDataSource.getRepository(StaffCredential);
    this.employeeRepo = AppDataSource.getRepository(Employee);
    this.passwordService = new PasswordService();
  }

  public onLogin = async (req: Request, res: Response) => {
    try {
      const { staffId, password } = req.body;

      const foundUser = await this.staffCredentialRepo.findOne({
        where: { staffId },
      });

      if (!foundUser) {
        return this.badRequestResponse(res, "Account not found");
      }

      if (
        !(await this.passwordService.validateHashedPassword(
          password,
          foundUser.hashedPassword
        ))
      ) {
        return this.badRequestResponse(res, "Invalid email/password");
      }

      return this.success(res, foundUser, "user logged in successfully");
    } catch (err) {
      return this.serverError(res, err);
    }
  };
}
