import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('Validate Customer Middleware');
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(403).send({ error: 'No Authrization Token Provided' });
    if (authorization === '555') return next();
    else
      return res
        .status(403)
        .send({ error: 'Invalid Authentication Token Provided.' });
    next();
  }
}
