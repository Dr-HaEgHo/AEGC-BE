// src/index.ts
import "reflect-metadata";


import App from "./app";




export function startServer() {
  const app = new App();

  app.initializeDatabla().then(() => app.startServer()).catch(() => null)
}

startServer()
