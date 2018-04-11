import * as express from "express";

class Routes {
  constructor() { }

  initRoutes(app: express.Application) {
    app.route('/api').get(this.init);
  }

  private init(req: express.Request, res: express.Response) {    
    return res.status(200).json({status: 'OK'});
  }
}

export default new Routes();