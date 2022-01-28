import { string, object } from 'yup';
import { CHARCOUNT, MESSAGES } from './constants';

export const form = {
  inputs: [
    {
      id: 1,
      type: 'email',
      name: 'email',
      placeholder: 'ваш емайл',
      value: 'email',
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      placeholder: 'ваш пароль',
      value: 'password',
    },
  ],
};

const trimString = string().trim();
export const signinSchema = object().shape({
  email: trimString.email(MESSAGES.EMAIL_IS_VALID).required(MESSAGES.EMAIL_REQUIRED),
  password: trimString
    .min(CHARCOUNT.PASSWORD_MIN, MESSAGES.PASSWORD_MIN)
    .max(CHARCOUNT.PASSWORD_MAX, MESSAGES.PASSWORD_MAX)
    .required(),
});
