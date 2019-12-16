import { APIError } from './APIError';

type IApp = {
  isFetching: boolean;
  imageUrl: string | null;
  error: APIError | null;
  sendCapturedImageRequest: (imageString: Blob) => void;
};

export default IApp;
