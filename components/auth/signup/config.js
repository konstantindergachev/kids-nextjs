import { string, object } from 'yup';
import { CHARCOUNT, MESSAGES } from './constants';

export const form = {
  inputs: [
    {
      id: 1,
      type: 'text',
      name: 'firstname',
      placeholder: 'ваше имя',
      value: 'firstname',
    },
    {
      id: 2,
      type: 'text',
      name: 'lastname',
      placeholder: 'ваша фамилия',
      value: 'lastname',
    },
    {
      id: 3,
      type: 'email',
      name: 'email',
      placeholder: 'ваш емайл',
      value: 'email',
    },
    {
      id: 4,
      type: 'password',
      name: 'password',
      placeholder: 'ваш пароль',
      value: 'password',
    },
  ],
};

const trimString = string().trim();
export const signupSchema = object().shape({
  firstname: trimString
    .min(CHARCOUNT.FIRSTNAME_MIN, MESSAGES.FIRSTNAME_MIN)
    .max(CHARCOUNT.FIRSTNAME_MAX, MESSAGES.FIRSTNAME_MAX)
    .required(),
  lastname: trimString
    .min(CHARCOUNT.LASTNAME_MIN, MESSAGES.LASTNAME_MIN)
    .max(CHARCOUNT.LASTNAME_MAX, MESSAGES.LASTNAME_MAX)
    .required(),
  email: trimString.email(MESSAGES.EMAIL_IS_VALID).required(MESSAGES.EMAIL_REQUIRED),
  password: trimString
    .min(CHARCOUNT.PASSWORD_MIN, MESSAGES.PASSWORD_MIN)
    .max(CHARCOUNT.PASSWORD_MAX, MESSAGES.PASSWORD_MAX)
    .required(),
});
