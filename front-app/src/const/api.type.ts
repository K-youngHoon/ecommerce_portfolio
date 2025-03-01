export interface IApiResponse<T> {
  refreshToken: string;
  accessToken: string;

  data: T;
}
