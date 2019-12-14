import axios from 'axios';

import { get } from '../config';

export default axios.create({
  baseURL: get('BACKEND_BASE_PATH')
});