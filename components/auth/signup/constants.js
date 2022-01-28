export const CHARCOUNT = {
  FIRSTNAME_MIN: 6,
  FIRSTNAME_MAX: 30,
  LASTNAME_MIN: 6,
  LASTNAME_MAX: 50,
  PASSWORD_MIN: 6,
  PASSWORD_MAX: 100,
};

export const MESSAGES = {
  FIRSTNAME_MIN: `имя должно быть минимум ${CHARCOUNT.FIRSTNAME_MIN} символов`,
  FIRSTNAME_MAX: `имя должно быть короче чем ${CHARCOUNT.FIRSTNAME_MAX} символов`,
  LASTNAME_MIN: `фамилия должна быть минимум ${CHARCOUNT.LASTNAME_MIN} символов`,
  LASTNAME_MAX: `фамилия должна быть короче чем ${CHARCOUNT.LASTNAME_MAX} символов`,
  EMAIL_REQUIRED: 'емайл необходимое поле',
  EMAIL_IS_VALID: 'емайл должен быть правильным',
  PASSWORD_MIN: `пароль должен быть минимум ${CHARCOUNT.PASSWORD_MIN} символов`,
  PASSWORD_MAX: `пароль должен быть короче чем ${CHARCOUNT.PASSWORD_MAX} символов`,
};
