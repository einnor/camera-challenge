// Types for Flux Standard Actions
// https://github.com/redux-utilities/flux-standard-action

export interface FluxStandardAction {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export type ActionCreator = () => FluxStandardAction;
