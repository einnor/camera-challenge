import { ImageState } from './app.types';
import * as selectors from './app.selectors';
import { initialState } from './app.reducer';

describe('Image - Selectors', () => {
  let state: ImageState;

  beforeAll(() => {
    state = { ...initialState };
  });

  it('should return isFetching', () => {
    const isFetching = selectors.getIsFetching({ image: state });
    expect(isFetching).toEqual(state.isFetching);
  });

  it('should return image url', () => {
    const imageUrl = selectors.getImageUrl({ image: state });
    expect(imageUrl).toEqual(state.data ? state.data.imageUrl : state.data);
  });

  it('should return error', () => {
    const error = selectors.getError({ image: state });
    expect(error).toEqual(state.error);
  });
});
