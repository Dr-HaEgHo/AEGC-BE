import { Routes } from "../interface/routes.interface";
import { AuthRoutes } from "./auth/auth.route";
import { UserRoutes } from "./user/users.routes";

export const routes = [new UserRoutes(), new AuthRoutes()] as Routes[];
