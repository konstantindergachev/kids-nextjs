import { parse } from 'cookie';
import { notifyService } from '@/services';

export default async (req, res) => {
  try {
    const { kids } = parse(req.headers.cookie);
    const response = await notifyService.create({
      port: 5000,
      endpoint: 'profiles',
      content: req.body,
      headers: { Authorization: `Bearer ${kids}` },
    });
    return res.status(200).json(response);
  } catch (error) {
    const { status, data } = error;
    res.status(status).json({ message: data.message });
  }
};
