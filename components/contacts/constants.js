export const CHARCOUNT = {
  MAGIC_TITLE_MIN: 6,
  MAGIC_TITLE_MAX: 30,
  MAGIC_TEXT_MIN: 6,
  MAGIC_TEXT_MAX: 100,
};

export const MESSAGES = {
  NEWSLETTER_EMAIL_REQUIRED: 'емайл для получения новостей - необходимое поле',
  NEWSLETTER_EMAIL_IS_VALID: 'емайл должен быть правильным',
  MAGIC_TITLE_MIN: `магический заголовок должен быть минимум ${CHARCOUNT.MAGIC_TITLE_MIN} символов`,
  MAGIC_TITLE_MAX: `магический заголовок должен быть короче чем ${CHARCOUNT.MAGIC_TITLE_MAX} символов`,
  MAGIC_EMAIL_REQUIRED: 'магический емайл - необходимое поле',
  MAGIC_EMAIL_IS_VALID: 'магический емайл должен быть правильным',
  MAGIC_NUMBER_IS_VALID: 'магический номер должен быть числом',
  MAGIC_NUMBER_IS_POSITIVE: `магический номер должнен быть положительным`,
  MAGIC_NUMBER_REQUIRED: `магический номер - это необходимое поле`,
  MAGIC_TEXT_MIN: `магический текст должен быть минимум ${CHARCOUNT.MAGIC_TEXT_MIN} символов`,
  MAGIC_TEXT_MAX: `магический текст должен быть короче чем ${CHARCOUNT.MAGIC_TEXT_MAX} символов`,
};
