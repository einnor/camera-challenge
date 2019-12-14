
import { FluxStandardAction, ActionCreator } from '../../../@types/FluxStandardActions';
import { APIError } from '../../../@types/APIError';
import { Image } from './app.types';

// Action Types
export const SEND_CAPTURED_IMAGE_REQUEST: string = 'SEND_CAPTURED_IMAGE_REQUEST';
export const SEND_CAPTURED_IMAGE_SUCESS: string = 'SEND_CAPTURED_IMAGE_SUCESS';
export const SEND_CAPTURED_IMAGE_FAILURE: string = 'SEND_CAPTURED_IMAGE_FAILURE';

// Actions
export type SendCapturedImageRequest = (image: string) => FluxStandardAction;

export const sendCapturedImageRequest: SendCapturedImageRequest = (image) => {
  return {
    type: SEND_CAPTURED_IMAGE_REQUEST,
    payload: { image },
  };
}

export type SendCapturedImageSuccess = (payload: Image) => FluxStandardAction;

export const sendCapturedImageSuccess: SendCapturedImageSuccess = (payload) => {
  return {
    type: SEND_CAPTURED_IMAGE_SUCESS,
    payload,
  };
}

export type SendCapturedImageFailure = (error: APIError) => FluxStandardAction;

export const sendCapturedImageFailure: SendCapturedImageFailure = (error) => {
  return {
    type: SEND_CAPTURED_IMAGE_FAILURE,
    payload: { error },
    error: true,
  };
}