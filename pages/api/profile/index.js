import { parse } from 'cookie';
import { notifyService } from '@/services';

export default async (req, res) => {
  try {
    const { kids } = parse(req.headers.cookie);
    const { userProfile, profileStatus } = req.body;
    if (!profileStatus) {
      const profile = {
        gender: userProfile.gender,
        phone: userProfile.phone,
        address: userProfile.address,
      };

      const response = await notifyService.create({
        endpoint: `profiles`,
        content: profile,
        headers: { Authorization: `Bearer ${kids}` },
      });

      return res.status(200).json(response);
    } else {
      const response = await notifyService.create({
        endpoint: `profiles/edit`,
        content: userProfile,
        headers: { Authorization: `Bearer ${kids}` },
      });

      return res.status(200).json(response);
    }
  } catch (error) {
    const { status, data } = error;
    res.status(status).json({ message: data.message });
  }
};
