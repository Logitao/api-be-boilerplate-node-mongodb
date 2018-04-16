import * as express from "express";

import TokenRoutes from "../modules/token/routes";
import UserRoutes from "../modules/user/routes";
import ProductRoutes from "../modules/product/routes";

import { Application } from "express";

class Routes {

  constructor() { }

  initRoutes(app: Application) {
    UserRoutes.initRoute(app);
    ProductRoutes.initRoute(app);
    TokenRoutes.initRoute(app);
  }
}

export default new Routes();