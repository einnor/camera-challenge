export interface APIError {
  error: string;
  message: string;
  status: string | number;
  body?: any;
}