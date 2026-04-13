export type ResponseErrorMessage =
  | "It should be a valid email"
  | "It should be a valid email!"
  | "Min length: 6"
  | "Max length: 20"
  | "Max length: 30"
  | "Required"
  | "User not found!"
  | "Already logged in!"
  | "Password does not match!"
  | "File too large";

export type ResponseError = Record<ResponseErrorMessage, string>;
