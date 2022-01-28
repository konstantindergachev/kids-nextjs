export const CHARCOUNT = {
  PASSWORD_MIN: 6,
  PASSWORD_MAX: 100,
};

export const MESSAGES = {
  EMAIL_REQUIRED: 'емайл необходимое поле',
  EMAIL_IS_VALID: 'емайл должен быть правильным',
  PASSWORD_MIN: `пароль должен быть минимум ${CHARCOUNT.PASSWORD_MIN} символов`,
  PASSWORD_MAX: `пароль должен быть короче чем ${CHARCOUNT.PASSWORD_MAX} символов`,
};
