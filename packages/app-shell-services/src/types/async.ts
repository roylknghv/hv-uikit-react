export type PropertyWithName<K extends string, T> = {
  [P in K]: T;
};

export type ErrorBase = NonNullable<unknown>;

export type IAsyncBaseResult<
  TData,
  TError extends ErrorBase = Error,
  TDataProp extends string = "data",
  TDataPending extends TData | undefined = undefined,
> = {
  isPending: boolean;
  error: TError | null;
} & PropertyWithName<TDataProp, TData | TDataPending | undefined>;

export type IAsyncResult<
  TData,
  TError extends ErrorBase = Error,
  TDataProp extends string = "data",
  TDataPending extends TData | undefined = undefined,
> =
  | IAsyncPendingResult<TData, TError, TDataProp, TDataPending>
  | IAsyncErrorResult<TData, TError, TDataProp, TDataPending>
  | IAsyncSuccessResult<TData, TError, TDataProp, TDataPending>;

export type IAsyncPendingResult<
  TData,
  TError extends ErrorBase = Error,
  TDataProp extends string = "data",
  TDataPending extends TData | undefined = undefined,
> = IAsyncBaseResult<TData, TError, TDataProp> & {
  isPending: true;
  error: null;
} & PropertyWithName<TDataProp, TDataPending>;

export type IAsyncErrorResult<
  TData,
  TError extends ErrorBase = Error,
  TDataProp extends string = "data",
  TDataPending extends TData | undefined = undefined,
> = IAsyncBaseResult<TData, TError, TDataProp, TDataPending> & {
  isPending: false;
  error: TError;
} & PropertyWithName<TDataProp, undefined>;

export type IAsyncSuccessResult<
  TData,
  TError extends ErrorBase = Error,
  TDataProp extends string = "data",
  TDataPending extends TData | undefined = undefined,
> = IAsyncBaseResult<TData, TError, TDataProp, TDataPending> & {
  isPending: false;
  error: null;
} & PropertyWithName<TDataProp, TData>;
