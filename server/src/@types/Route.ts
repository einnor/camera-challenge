import { Request, Response } from 'express';

export interface Route {
  action: (request: Request, response: Response) => any;
  path: string;
  method: string;
}

export default Route;
