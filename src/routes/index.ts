import { Routes } from "../interface/routes.interface";
import { UserRoutes } from "./user/users.routes";

export const routes = [
  new UserRoutes()
] as Routes[]