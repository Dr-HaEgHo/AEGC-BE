import { Response } from "express";

export interface PaginatedData<T> {
  data: T[];
  batch: number;
  total: number;
  limit: number;
}

export class BaseController {
  badRequestResponse<T>(res: Response, errors?: T, message = "Bad Request") {
    return res.status(400).json({
      success: false,
      message,
      errors,
    });
  }

  conflictResponse<T>(res: Response, message: string, errors?: T) {
    return res.status(409).json({
      success: false,
      message,
      errors,
    });
  }

  ForbiddenRequestResponse<T>(res: Response, message: string, errors?: T) {
    return res.status(403).json({
      success: false,
      message,
      errors,
    });
  }

  unAuthorizedRequest = (
    res: Response,
    errors?: any,
    message = "Unauthorized Request"
  ) => {
    return res.status(401).json({
      success: false,
      message,
      errors,
    });
  };

  payloadOverload = (
    res: Response,
    errors?: any,
    message = "Large request entity"
  ) => {
    return res.status(413).json({
      success: false,
      message,
      errors,
    });
  };

  unProcessedResponse = (
    res: Response,
    errors?: any,
    message = "Unprocessible Entity"
  ) => {
    return res.status(422).json({
      success: false,
      message,
      errors,
    });
  };

  serverError = (
    res: Response,
    errors?: any,
    message = "Something went wrong"
  ) => {
    return res.status(501).json({
      success: false,
      message,
      errors,
    });
  };

  success<T>(res: Response, data?: T, message = "Success") {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  createSuccess<T>(res: Response, data?: T, message = "Created successfully") {
    return res.status(201).json({
      success: true,
      data,
      message,
    });
  }

  successAction = (res: Response, message = "Action successful") => {
    return res.status(200).json({
      success: true,
      message,
    });
  };

  paginated<T>(
    res: Response,
    data: PaginatedData<T>,
    message = "Fetched paginated data"
  ) {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  notFoundResponse = (
    res: Response,
    errors?: any,
    message = "Entity not found"
  ) => {
    return res.status(404).json({
      success: false,
      message,
      errors,
    });
  };

  paymentRequiredResponse = (
    res: Response,
    errors?: any,
    message = "Payment Required"
  ) => {
    return res.status(402).json({
      success: false,
      message,
      errors,
    });
  };
}
