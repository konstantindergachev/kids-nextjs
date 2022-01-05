import { serialize } from 'cookie';
import { notifyService } from '@/services';
import { TOKEN_NAME, MAX_AGE } from '@/constants';

export default async (req, res) => {
  try {
    const response = await notifyService.create({
      port: 5000,
      endpoint: 'users/login',
      content: req.body,
    });

    res.setHeader(
      'Set-Cookie',
      serialize(TOKEN_NAME, response.user.token, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
      })
    );

    return res
      .status(200)
      .json({ username: `${response.user.firstname} ${response.user.lastname}` });
  } catch (error) {
    const { status, data } = error;
    res.status(status).json({ message: data.errors.message });
  }

  res.status(406).json({ error: 'Not acceptable' });
};
