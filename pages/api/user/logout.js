import { serialize } from 'cookie';
import { TOKEN_NAME } from '@/constants';

export default async (req, res) => {
  res.setHeader(
    'Set-Cookie',
    serialize(TOKEN_NAME, req.cookies.kids, {
      maxAge: new Date(0),
      httpOnly: true,
      secure: process.env.NODE_ENV == 'production',
      path: '/',
      sameSite: 'strict',
    })
  );

  res.status(205).json({ success: true, message: 'No content, refresh' });
};
