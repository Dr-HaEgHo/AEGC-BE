import express, { NextFunction } from "express";
import { Response, Request } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./interface/routes.interface";
import cors from "cors";
import { routes } from "./routes";

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public async initializeDatabase() {
    try {
      await AppDataSource.initialize();
      console.info("=====================================");
      console.info("Database connected successfully");
      console.info("=====================================");
    } catch (error) {
      console.log("errrrrrrrrr", error);
      console.info("Error initializing databse", error);
    }
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeRoutes(routeList: Routes[]) {
    routeList.map((route) => {
      this.app.use("/api/v1", route.router);
    });

    this.app.get("/", (req: Request, res: Response) => {
      return res.send("Welcome to asgd backend");
    });

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({ message: "Route not found" });
    });
  }

  public startServer() {
    this.app.listen(8080, () => {
      console.info("==============================");
      console.info("App is listening on port 8080");
      console.info("==============================");
    });
  }
}
