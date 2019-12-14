import { IGlobalState } from '../../../@types';

export const getIsFetching = ({ image }: IGlobalState) => image.isFetching;

export const getImageUrl = ({ image }: IGlobalState) => image.data ? image.data.imageUrl : image.data;

export const getError = ({ image }:IGlobalState) => image.error;
