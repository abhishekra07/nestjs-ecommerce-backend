import * as argon2 from 'argon2';

export const hashPassword = async (password: string) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    console.log('error in hashPassword : ', err);
    throw err;
  }
};

export const doesPasswordMatch = async (
  hashPassword: string,
  password: string,
) => {
  return await argon2.verify(hashPassword, password);
};
