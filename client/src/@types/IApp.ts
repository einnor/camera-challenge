import { APIError } from './APIError';

type IApp = {
  isFetching: boolean;
  imageUrl: string | null;
  error: APIError | null;
  sendCapturedImageRequest: (imageString: string) => void;
};

export default IApp;