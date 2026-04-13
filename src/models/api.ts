// Register
export interface RequestUserRegister {
  username: string;
  email: string;
  password: string;
}

export interface UserRegisterResponse {
  message: string;
}

// Login
export interface RequestUserLogin {
  username?: string;
  email?: string;
  password: string;
}

export interface UserLoginResponse {
  accessToken: string;
}
