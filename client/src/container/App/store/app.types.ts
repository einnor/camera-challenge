import { APIError } from '../../../@types/APIError';

export type Image = {
  imageUrl: string;
};

export type ImageState = {
  isFetching: boolean;
  data: Image | null;
  error: APIError | null;
};