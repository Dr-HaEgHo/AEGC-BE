import * as bcrypt from "bcrypt";

export class PasswordService {
  constructor() {}
  public async hashPassword(userPassword: string): Promise<string> {
    try {
      const saltRounds = bcrypt.genSaltSync(16);
      return bcrypt.hashSync(userPassword, saltRounds);
    } catch (err) {
      throw err;
    }
  }

  public async validateHashedPassword(
    userPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    try {
      return bcrypt.compareSync(userPassword, hashedPassword);
    } catch (err) {
      throw err;
    }
  }
}
