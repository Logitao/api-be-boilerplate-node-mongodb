import * as express from 'express';
import * as http from 'http';
import * as Mongoose from 'mongoose';

import Routes from './routes/routes';

class App {
  
  public app: express.Application;

  constructor() { 
    this.app = express();
    this.middleware();
  }

  private middleware(): void {   
    this.router(this.app);            
  }

  private router(app: express.Application): void {
    Routes.initRoutes(app);
  }  

}

export default new App().app;