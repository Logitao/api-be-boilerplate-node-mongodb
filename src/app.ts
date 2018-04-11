import * as express from 'express';
import * as http from 'http';
import * as Mongoose from 'mongoose';

import Routes from './routes/routes';
import db from './models/index';

class App {
  
  public app: express.Application;

  constructor() { 
    this.app = express();
    this.middleware();
  }

  private middleware(): void {   
    db
    console.log(db.mongoose.model('User').find().then((user) => {console.log('Entrou aqui')}));
    //db.mongoose.model('User');  

    this.router(this.app);            
  }

  private router(app: express.Application): void {
    Routes.initRoutes(app);
  }  
}

export default new App().app;