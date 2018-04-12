import * as express from "express";

import db from '../models/config.models';
import { IUserAttributes } from '../models/user.model';

class Routes {
  constructor() { }

  initRoutes(app: express.Application) {
    app.route('/api').get(this.init);
    app.route('/api').post(this.createUser);
  }

  private init(req: express.Request, res: express.Response) {
    return res.status(200).json({ status: 'OK' });
  }

  private createUser(req, res) {
    const user: IUserAttributes = {
      name: 'Yasmin',
      email: 'ym.fortunato@gmail.com',
      password: 'F31j40'
    }
    new db.User(user)
      .save()
      .then(data => {
        res.status(200).json({ message: 'User created with success'});
      })      
      .catch(error => {
        res.status(400).json({ message: 'User was not created!'});
      })
  }
}

export default new Routes();