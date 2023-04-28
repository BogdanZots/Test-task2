export interface INumbersPairedReponse {
  errorMessage?: string;
  isPaired: boolean;
}

export type DogsRequstType = number[] | string;

export interface IUseRequestResponse {
  response: boolean;
  errorMessage: string;
  isLoading: boolean;
}
