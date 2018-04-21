import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import * as HTTPStatus from 'http-status';

class Handlers {
    
    authFail(res: Response) {
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    };

    authSuccess(res: Response, credentials: any, data: any) {
        //implementar esse método
    };

    onError(res: Response, message: string, error: any) {
        console.log(`Error: ${error}`);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message); 
    };

    onSuccess(res: Response, data: any) {         
        res.status(HTTPStatus.OK).json({ payload: data }); 
    };

    onNext(next) {
        next();
    }

    errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
        console.error(`API error handler was executed: ${err}`);
        res.status(500).json({
            errorCode: 'ERR-001',
            errorMessage: 'Internal Server Error'
        })
    };

    dbErrorHandler(res: Response, error: any) {
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
            code: 'ERR-01',
            message: `Error to CREATE User`
        }); 
    }

}

export default new Handlers();