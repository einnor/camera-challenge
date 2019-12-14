import { IGlobalState } from '../../../@types';

export const getIsFetching = ({ image }: IGlobalState) => image.isFetching;

export const getImage = ({ image }: IGlobalState) => image.data;

export const getError = ({ image }:IGlobalState) => image.error;
