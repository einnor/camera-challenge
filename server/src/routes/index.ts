import { routes as Images } from './Images';
import { Route } from '../@types';

/**
 * Combine all the routes
 */
export const Routes: Route[] = [];

Routes.push.apply(Routes, Images);