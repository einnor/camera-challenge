import consoleStamp from 'console-stamp';
import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { Routes } from './routes';
import { Api } from './lib';

// Make sure the node log entries have timestamps
consoleStamp(console, {
  pattern: 'mm/dd/yyyy HH:MM:ss.l',
});

const devRequestLogger = (req: Request, res: Response, next) => {
  if (process.env.NODE_ENV !== 'development') {
    return next();
  }
  console.log(
    `\n\REQUEST:\n\n${req.method} ${req.path} \
    \n  headers: ${JSON.stringify(req.headers)} \
    \n  params: ${JSON.stringify(req.params)} \
    \n  query: ${JSON.stringify(req.query)} \
    \n  body: ${JSON.stringify(req.body)} \
    \n  file: ${JSON.stringify(req.file)} \
    \n-> \
    \n${res.statusCode} ${res.statusMessage}
    \n\n\n`
  );
  next();
};

// Initialize the API...
export const app = async () => {
  // Create a new express application instance
  const router: express.Application = express();

  // The port the express app will listen on
  const port: number = parseInt(process.env.PORT || '8080');

  // Setup the JSON parser
  router.use(express.json({ limit: '1mb' }));

  // Configure CORS
  router.use(cors());

  // Use Helmet
  router.use(helmet());

  // Register all application routes
  Routes.forEach((route) => {

    // Apply middlewares if set
    if (route.middlewares) {
      route.middlewares.forEach((middleware) => router[route.method](route.path, middleware as express.RequestHandler));
    }

    // Set the controller for this route.
    router[route.method](route.path, (request: Request, response: Response, next: NextFunction) => {
      route
        .action(request, response)
        .then(() => next())
        .catch((err: any) => next(err));
    });
  });

  // Handle unexpected/uncaught errors
  router.use(Api.handleUncaughtException);

  // Serve the application at the given port
  // When running tests we don't really need to have the app listen on a network port
  if (process.env.NODE_ENV !== 'test') {
    router.listen(port, () => {
      // Success callback
      console.log(`Listening at http://localhost:${port}/`);
    });
  }

  router.use(devRequestLogger);

  return router;
}
