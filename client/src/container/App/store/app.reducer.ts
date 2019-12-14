import { ImageState } from './app.types';
import { FluxStandardAction } from '../../../@types/FluxStandardActions';
import { SEND_CAPTURED_IMAGE_REQUEST, SEND_CAPTURED_IMAGE_SUCESS, SEND_CAPTURED_IMAGE_FAILURE } from './app.actions';

export const initialState: ImageState = {
  isFetching: false,
  data: null,
  error: null
};

const image = (state: ImageState = initialState, action: FluxStandardAction) => {
  switch (action.type) {
    case SEND_CAPTURED_IMAGE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case SEND_CAPTURED_IMAGE_SUCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };

    case SEND_CAPTURED_IMAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default image;
