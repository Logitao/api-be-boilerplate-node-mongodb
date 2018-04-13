import { Request, Response, Application } from 'express';

import UserController from './controllers';
import { IRoutes } from '../../interfaces/routes.interface';

export class UserRoutes implements IRoutes {

    constructor() { }

    initRoute(app: Application): void {
        app.route('/api/users/all').get(this.getAllUser);
        app.route('/api/users/create').post(this.createUser);
    }

    private getAllUser(req: Request, res: Response) {
        return UserController.getAllUser(req, res)
    }

    private createUser(req: Request, res: Response) {
        return UserController.createUser(req, res);
    }
}

export default new UserRoutes();