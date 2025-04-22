import * as jwt from "jsonwebtoken";
import configuration from "../config";

class TokenService {
  static generateToken(payload: object): string {
    return jwt.sign(payload, configuration.jwt_token_secret, {
      expiresIn: configuration.jwt_token_expiration,
    });
  }

  static verifyToken(token: string): any {
    return jwt.verify(token, configuration.jwt_token_secret);
  }
}

export default TokenService;
