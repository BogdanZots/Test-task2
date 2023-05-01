export interface INumbersPairedReponse {
  errorMessage?: string;
  isPaired: boolean;
}

export interface IDogsRequstResponse {
  data: Array<number>;
  error?: string;
}

export interface IUseRequestResponse {
  response: boolean;
  errorMessage: string;
  isLoading: boolean;
}
