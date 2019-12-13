import { Images }from '../controllers';
import { Route } from '../@types';

export const routes: Route[] = [
  {
    path: '/image/send',
    method: 'post',
    action: Images.send,
  },
];
