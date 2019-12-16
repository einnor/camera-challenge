import { Images }from '../controllers';
import { upload } from '../middlewares';
import { Route } from '../@types';

export const routes: Route[] = [
  {
    path: '/image/send',
    method: 'post',
    action: Images.send,
    middlewares: [upload.single('image')],
  },
];
