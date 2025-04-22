import { NextFunction, Request, Response } from "express";
import { checkSchema, Schema, validationResult } from "express-validator";

export const validate =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validations = checkSchema(schema);
      await Promise.all(validations.map((validation) => validation.run(req)));
      const errors = validationResult(req);

      if (errors.isEmpty()) {
        return next();
      }

      // Concatenate all error messages into a single string
      const errorMessages = errors
        .array()
        .map((error) => error.msg)
        .join(", ");

      return res.status(400).json({
        status: 400,
        error: errorMessages,
        message: "Validation Error",
      });
    } catch (error: any) {
      return res.status(500).json({
        status: 500,
        errors: {
          error: "Internal Server Error",
          message: error.message || "An unexpected error occurred",
        },
      });
    }
  };

export function isPasswordValid(password: string): string[] {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password should be at least 8 characters long");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password should contain at least one uppercase letter (A-Z)");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password should contain at least one lowercase letter (a-z)");
  }

  if (!/\d/.test(password)) {
    errors.push("Password should contain at least one digit (0-9)");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password should contain at least one special character");
  }

  return errors;
}
