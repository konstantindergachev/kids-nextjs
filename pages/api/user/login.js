import { serialize } from 'cookie';
import { notifyService } from '@/services';
import { TOKEN_NAME, MAX_AGE } from '@/constants';

export default async (req, res) => {
  try {
    const response = await notifyService.create({
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
    res.status(500).json({ msg: error.message });
  }

  res.status(406).json({ error: 'Not acceptable' });
};
