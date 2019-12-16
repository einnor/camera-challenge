import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

export interface Route {
  action: (request: Request, response: Response) => any;
  path: string;
  method: string;
  middlewares?: RequestHandler[];
}

export default Route;
