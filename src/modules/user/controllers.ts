import { Request, Response, Application } from 'express';
import * as _ from 'lodash';

import Handlers from '../../utils/handlers';
import User from './services';

class UserController {

    constructor() { }

    getAllUser(req: Request, res: Response) {
        User.getAll()
            .then(_.partial(Handlers.onSuccess, res))        
            .catch(_.partial(Handlers.onError, res, `Error to GET Users`))
    }

    createUser(req: Request, res: Response) {
        User.create(req.body)
            .then(_.partial(Handlers.onSuccess, res))        
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, `Error to CREATE User`))
    }
}

export default new UserController();