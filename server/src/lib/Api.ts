import { Request, Response, NextFunction } from 'express';

export default class Api {
  public static internalError(request: Request, response: Response, responseData?: string | object): Response {
    response = response.status(500);

    console.error('500 Status at: ', new Date(), `\n`, responseData || 'no error data');

    if (process.env.NODE_ENV === 'production') {
      responseData = 'Internal Server Error';
    }

    if (typeof responseData === 'string') {
      return response.json({
        error: responseData,
      });
    }
    if (typeof responseData === 'object') {
      const messageOrError = responseData['message'] || responseData['error'];
      if (messageOrError) {
        return response.json({
          error: messageOrError,
        });
      }
    }

    return response.json(responseData);
  }

  public static badRequest(request: Request, response: Response, responseData: string | object): Response {
    response.statusCode = 400;
    console.error(`400 Status:\n${responseData || 'no error data'}`);

    if (typeof responseData === 'string') {
      return response.json({
        error: responseData,
      });
    } else {
      return response.json(responseData);
    }
  }

  public static handleUncaughtException(error: Error, request: Request, response: Response, next: NextFunction) {
    const errorMessage: any = error.toString();

    // Otherwise, return 500 (internal server error)
    return Api.internalError(request, response, errorMessage);
  }
}