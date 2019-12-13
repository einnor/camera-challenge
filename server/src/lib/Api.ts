import { Request, Response } from 'express';

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
}