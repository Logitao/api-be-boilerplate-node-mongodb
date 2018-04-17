import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as Mongoose from 'mongoose';

import Routes from './routes/routes';

class App {
  
  public app: express.Application;

  constructor() { 
    this.app = express();    
    this.middleware();
  }

  private middleware(): void {   
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      next();
    });    
    this.app.use(morgan('development'));
    this.app.use(bodyParser.urlencoded( {extended: true} ));
    this.app.use(bodyParser.json());
    this.router(this.app);            
  }

  private router(app: express.Application): void {
    Routes.initRoutes(app);
  }  

}

export default new App().app;