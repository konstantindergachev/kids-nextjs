import { string, number, object } from 'yup';
import { Input } from '@/components/shared/input';
import { CHARCOUNT, MESSAGES } from './constants';
import { TextArea } from '@/components/shared/textarea';

export const magicForm = {
  inputs: [
    {
      id: 1,
      type: 'text',
      name: 'magic_title',
      placeholder: 'твоя магическая тема',
      value: 'magic_title',
      component: Input,
    },
    {
      id: 2,
      type: 'email',
      name: 'magic_email',
      placeholder: 'твой магический адрес (test@example.com)',
      value: 'magic_email',
      component: Input,
    },
    {
      id: 3,
      type: 'number',
      name: 'magic_number',
      placeholder: 'твое магическое число',
      value: 'magic_number',
      component: Input,
    },
    {
      id: 4,
      type: 'text',
      name: 'magic_text',
      placeholder: 'твое магическое сообщение',
      value: 'magic_text',
      cols: '30',
      rows: '10',
      component: TextArea,
    },
  ],
};

const trimString = string().trim();
export const magicTextSchema = object().shape({
  magic_title: trimString
    .min(CHARCOUNT.MAGIC_TITLE_MIN, MESSAGES.MAGIC_TITLE_MIN)
    .max(CHARCOUNT.MAGIC_TITLE_MAX, MESSAGES.MAGIC_TITLE_MAX)
    .required(),
  magic_email: trimString
    .email(MESSAGES.MAGIC_EMAIL_IS_VALID)
    .required(MESSAGES.MAGIC_EMAIL_REQUIRED),
  magic_number: number()
    .integer(MESSAGES.MAGIC_NUMBER_IS_VALID)
    .positive(MESSAGES.MAGIC_NUMBER_IS_POSITIVE)
    .typeError(MESSAGES.MAGIC_NUMBER_REQUIRED),
  magic_text: trimString
    .min(CHARCOUNT.MAGIC_TEXT_MIN, MESSAGES.MAGIC_TEXT_MIN)
    .max(CHARCOUNT.MAGIC_TEXT_MAX, MESSAGES.MAGIC_TEXT_MAX)
    .required(),
});

export const newsletterForm = {
  inputs: [
    {
      id: 1,
      type: 'email',
      name: 'newsletter_email',
      placeholder: 'емайл для наших новостей',
      value: 'newsletter_email',
      component: Input,
    },
  ],
};
export const newsletterSchema = object().shape({
  newsletter_email: trimString
    .email(MESSAGES.NEWSLETTER_EMAIL_IS_VALID)
    .required(MESSAGES.NEWSLETTER_EMAIL_REQUIRED),
});
