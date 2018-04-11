import * as express from 'express';
import * as http from 'http';

import Routes from './routes/routes';
import db from './models/index';

class App {
  
  public app: express.Application;

  constructor() { 
    this.app = express();
    this.middleware();
  }

  private middleware(): void {
    this.router(this.app);
    (req, res, next) => {
      req['context'].db = db; 
      next();
    }    
  }

  private router(app: express.Application): void {
    Routes.initRoutes(app);
  }  
}

export default new App().app;