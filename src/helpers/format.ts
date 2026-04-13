export const isEmailValid = (value: string) => {
  const regex: RegExp = new RegExp(
    "^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,})$"
  );
  return regex.test(value);
}

export const isPasswordValid = (value: string) => {
  const regex: RegExp = new RegExp(
    "^[a-zA-Z0-9!@#$%^&*]{6,30}$"
  );
  return regex.test(value);
}

export const isUsernameValid = (value: string) => {
  const regex: RegExp = new RegExp(
    "^[a-zA-Z][a-zA-Z0-9._]{5,19}$"
  );
  return regex.test(value)
}
