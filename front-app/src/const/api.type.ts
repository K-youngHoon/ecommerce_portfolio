export interface IApiResponseSuccess<T> {
  status: STATUSENUM;
  code: number;
  message: string;
  data: T;
  error: null;
}

export interface IApiResponseError {
  status: STATUSENUM;
  code: number;
  message: string;
  data: null;
  error: {
    message: string;
    type: string;
  };
}

export type IApiResponse<T> = IApiResponseSuccess<T> | IApiResponseError;

// export type HTTPSTATUS = "success" | "error"
export const enum STATUSENUM {
  SUCCESS = "success",
  ERROR = "error",
}
