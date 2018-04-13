import * as express from "express";

import UserRoutes from "../modules/user/routes";
import { Application } from "express";

class Routes {

  constructor() { }

  initRoutes(app: Application) {
    UserRoutes.initRoute(app);
  }
}

export default new Routes();