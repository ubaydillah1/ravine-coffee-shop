export type ApiResponse<T = unknown> = {
  message: string;
  result?: T;
};
